import { Comment } from './comment' 

export interface Post {
    id: string,
    _id: string,
    title: string,
    category: string,
    content: string,
    author_id: string,
    author_name: string, 
    created_at: string,
    updated_at: string,
    comments?: Comment[],
    number_of_comment?: number,
    last_comment?: Comment,
    category_id: string
}

export interface PostSummary {
    id: string,
    title: string,
    content: string,
    category: string,
    author_id: string,
    author_name: string,
    created_at: string,
    updated_at: string,
    number_of_comments?: number,
    last_comment?: Comment
}