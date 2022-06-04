import { Comment } from './comment' 

export interface Post {
    id: string,
    title: string,
    content: string,
    user_id: string,
    updated_at: string,
    created_at: string,
    comments: Comment[],
    category_id: string
}