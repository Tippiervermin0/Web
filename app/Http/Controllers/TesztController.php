<?php

namespace App\Http\Controllers;

use App\Models\teszt;
use Illuminate\Http\Request;

class tesztController extends Controller
{
    public function teszt(){
        $adatok = response()->json(teszt::with('kategoria')->get());
        return $adatok;
    }
}
