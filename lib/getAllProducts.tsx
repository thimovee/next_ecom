export default async function getAllProducts() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/products/records')
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}