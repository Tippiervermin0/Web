<?php

namespace App\Http\Controllers;

use App\Models\kategoria;
use Illuminate\Http\Request;

class kategoriaController extends Controller
{

    public function index(){
        $kategoriak = response()->json(kategoria::all());
        return $kategoriak;
    }
    //
}
