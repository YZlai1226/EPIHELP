<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CommentResource;

class PostSummary extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $post_summary = [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'category' => $this->category->name,
            'category_id' => $this->category->id,
            'author_id' => $this->user->id,
            'author_name' => $this->user->name,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'number_of_comments' => count($this->comments)
        ];
        if (count($this->comments) > 0) {
            $post_summary['last_comment'] = new CommentResource($this->comments[count($this->comments) - 1]);
        }
        return $post_summary;
    }
}
