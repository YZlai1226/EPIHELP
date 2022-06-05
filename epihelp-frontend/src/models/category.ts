import { Post } from './post';

export interface Category {
    id: string,
    name: string,
    description: string,
    image_url?: string,
    posts?: Post[],
    created_at: string,
    updated_at: string,
}
