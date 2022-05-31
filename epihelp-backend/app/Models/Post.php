<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\Comment;
use App\Models\User;
use App\Models\Category;
use COM;

class Post extends Model
{
    // use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'posts';
    protected $fillable = [
        'title',
        'content',
        'category_id',
        'user_id',
        'comments'
    ];
    protected $casts = [
        'category_id' => 'string',
        'user_id' => 'string'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

