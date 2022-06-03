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
    last_comment?: {
        id: string,
        author_id: string,
        author_name: string,
        content: string,
        created_at: string,
        updated_at: string
    }
}

export interface Comment {
    id: string,
    content: string,
    post_id: string,
    author_id: string,
    author_name: string,
    created_at: string,
    updated_at: string
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
        updated_at: string,
    }