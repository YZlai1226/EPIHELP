<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\PostSummary;

class CategoryResource extends JsonResource
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
            'name' => $this->name,  
            'description' => $this->description,
            'image_url' => $this->image,
            'posts' => PostSummary::collection($this->posts),
            //title, author, date et heure de création, dernière réponse (date et auteur), nombre de commentaires, 
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
