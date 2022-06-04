import { Comment, CommentSummary } from './comment'

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
    last_comment?: CommentSummary[]
}

export interface User {
    id: string,
    name: string,
    email: string,
    password: string,
    posts?: PostSummary[],
    comments?: Comment[],
    role?: string,
    created_at: string,
    updated_at: string
}