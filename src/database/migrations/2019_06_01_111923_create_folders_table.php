<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \LTiollier\NovaMediasManager\App\Models\Folder;

class CreateFoldersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(config('novamediasmanager.database.folders_table_name'), function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('folder_id')->unsigned()->nullable();
            $table->foreign('folder_id')->references('id')->on('folders')->onDelete('cascade');
            $table->timestamps();
        });

        $root = new Folder;
        $root->name = 'root';
        $root->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(config('novamediasmanager.database.folders_table_name'));
    }
}
