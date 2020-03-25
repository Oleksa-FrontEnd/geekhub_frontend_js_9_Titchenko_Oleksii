export type PostType = {
    docs: Array<PostDocsType>,
    total: number,
    limit: number,
    page: number,
    pages: number
}

export type PostDocsType = {
    description: string,
    featuredImage: string,
    category: Array<string>,
    tags: Array<string>,
    likesCount: number,
    viewsCount: number,
    _id: string,
    title: string,
    content: string,
    author: string,
    slug: string
}