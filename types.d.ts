export type Product = {
    "category": string,
    "collectionId": string,
    "collectionName": string,
    "created": Date,
    "description": string,
    "discount": number,
    "id": string,
    "image": string,
    "name": string,
    "price": number,
    "rating": number,
    "updated": Date;
}

type ApiResponse = {
    "page": number,
    "perPage": number,
    "totalItems": number,
    "totalPages": number,
    "items": Product[],
}