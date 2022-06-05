import { Comment } from './comment' 

export interface Post {
    id: string,
    title: string,
    content: string,
    user_id: string,
    updated_at: string,
    created_at: string,
    number_of_comments?: number,
    comments?: Comment[],
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