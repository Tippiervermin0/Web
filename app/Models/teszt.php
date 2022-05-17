<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\kategoria;

class teszt extends Model
{
    use HasFactory;


    public function kategoria() {
        return $this->hasOne(kategoria::class, 'kategorianev');
    }
}
