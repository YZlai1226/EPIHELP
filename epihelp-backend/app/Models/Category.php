<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Category extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'categories';
    
    protected $fillable = [
        'name',
        'image',
        'description'
    ];
    public function posts() {
        return $this->hasMany(Post::class);
    }
}
