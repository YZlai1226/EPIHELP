import { CommentSummary } from './comment';

export interface Category {
    id: string,
    name: string,
    description: string,
    image_url?: string,
    posts?: CommentSummary[],
    created_at: string,
    updated_at: string,
}
