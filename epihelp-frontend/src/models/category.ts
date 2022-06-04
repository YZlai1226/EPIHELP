export interface Category {
    id: string,
    name: string,
    description: string,
    image_url?: string,
    posts?: string[],
    created_at: string,
    updated_at: string,
}