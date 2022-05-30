<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'id' => $this->id,
            'title' => $this->name,
            'content' => $this->email,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'category' => $this->category,
            'user' => $this->user,
            'comments' => $this->comments
        ];
    }
}
