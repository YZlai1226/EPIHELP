export interface Comment {
    id: string,
    content: string,
    post_id: string,
    author_id: string,
    author_name: string,
    created_at: string,
    updated_at: string
}

export interface CommentSummary {
        id: string,
        author_id: string,
        author_name: string,
        content: string,
        created_at: string,
        updated_at: string
}