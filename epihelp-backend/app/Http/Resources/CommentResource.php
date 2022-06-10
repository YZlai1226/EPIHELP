<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $comment = [
            'id' => $this->id,
            'content' => $this->content,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
        if ($this->user) {
            $comment['author_id'] = $this->user->id;
            $comment['author_name'] = $this->user->name;
        } else {
            $comment['author_id'] = 'undefined';
            $comment['author_name'] = 'undefined';
        }
        return $comment;
    }
}
