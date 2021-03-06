<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\CommentResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            '_id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'password' => $this->password,
            'posts' => PostSummary::collection($this->posts),
            'comments' => CommentResource::collection($this->comments),
            'formation' => $this->formation,
            'year' => $this->year,
            'city' => $this->city,
            'bio' => $this->bio,
            'role' => $this->role,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
