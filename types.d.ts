export type Product = {
    "id": string,
    "name": string,
    "discount": number,
    "price": number,
    "description": string,
    "image": string,
    "category": string,
    "rating": number,
}

type ApiResponse = {
    "page": number,
    "perPage": number,
    "totalItems": number,
    "totalPages": number,
    "items": Product[],
}
