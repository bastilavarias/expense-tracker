<?php

namespace App\Common;

use Throwable;

class Helper
{
    public static function formatApiResponse(
        $success,
        $message,
        $data,
        $code = 200
    ) {
        $apiResponse = [
            "code" => $code,
            "success" => $success,
            "success_message" => $success ? $message : null,
            "error" => !$success,
            "error_message" => !$success ? $message : null,
            "data" => $data,
        ];
        return response($apiResponse, $code);
    }

    public static function getValidatorErrorMessage(
        $validatorMessages,
        $properties
    ): string {
        try {
            foreach ($properties as $property) {
                if ($validatorMessages->has($property)) {
                    return $validatorMessages->get($property)[0];
                }
            }
        } catch (Throwable $e) {
            return "Server Error.";
        }
        return "Server Error.";
    }
}
