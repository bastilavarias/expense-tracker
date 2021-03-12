<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCashFlowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("cash_flows", function (Blueprint $table) {
            $table->id();
            $table->decimal("amount", 9, 3);
            $table->unsignedBigInteger("cash_flow_category_id");
            $table
                ->foreign("cash_flow_category_id")
                ->references("id")
                ->on("cash_flow_categories");
            $table->text("comment");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("cash_flows");
    }
}
