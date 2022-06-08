import { Comment } from './comment'
import { PostSummary } from './post'

export interface User {
    _id: string,
    name: string,
    email: string,
    password: string,
    year?: string,
    formation?: string,
    posts?: PostSummary[],
    comments?: Comment[],
    role?: string,
    tags?: string[],
    created_at: string,
    updated_at: string,
}