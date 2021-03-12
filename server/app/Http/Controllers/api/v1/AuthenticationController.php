<?php

namespace App\Http\Controllers\api\v1;

use App\Common\Helper;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "username" => "required|unique:users",
            "password" => "required",
        ]);
        if ($validator->fails()) {
            $validatorMessages = $validator->messages();
            $errorMessage = Helper::getValidatorErrorMessage(
                $validatorMessages,
                ["name", "username", "password"]
            );
            return Helper::formatApiResponse(false, $errorMessage, null, 400);
        }
        $formData = [
            "name" => $request->input("name"),
            "username" => $request->input("username"),
            "password" => $request->input("password"),
        ];
        $credentials = [
            "name" => $formData["name"],
            "username" => $formData["username"],
            "password" => Hash::make($request->input($formData["password"])),
        ];
        $createdUser = User::create($credentials);
        Auth::attempt([
            "username" => $formData["username"],
            "password" => $formData["password"],
        ]);
        $accessToken = Auth::user()->createToken("authToken")->accessToken;
        $responseData = [
            "data" => $createdUser,
            "access_token" => $accessToken,
        ];
        return Helper::formatApiResponse(
            true,
            "Record has been created.",
            $responseData,
            200
        );
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "username" => "required",
            "password" => "required",
        ]);
        if ($validator->fails()) {
            $validatorMessages = $validator->messages();
            $errorMessage = Helper::getValidatorErrorMessage(
                $validatorMessages,
                ["username", "password"]
            );
            return Helper::formatApiResponse(false, $errorMessage, null, 400);
        }
        $formData = [
            "username" => $request->input("username"),
            "password" => $request->input("password"),
        ];
        if (
            !Auth::attempt([
                "username" => $formData["username"],
                "password" => $formData["password"],
            ])
        ) {
            return Helper::formatApiResponse(
                false,
                "Invalid credentials.",
                null,
                400
            );
        }
        $user = Auth::user();
        $accessToken = Auth::user()->createToken("authToken")->accessToken;
        $responseData = [
            "data" => $user,
            "access_token" => $accessToken,
        ];
        return Helper::formatApiResponse(
            true,
            "Login successfully.",
            $responseData,
            200
        );
    }
}
