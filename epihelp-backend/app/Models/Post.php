<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\Comment;
use App\Models\User;

class Post extends Model
{
    // use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'posts';
    protected $fillable = [
        'title',
        'content',
        'category',
        'user',
        'comments' => []
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }
    
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}

