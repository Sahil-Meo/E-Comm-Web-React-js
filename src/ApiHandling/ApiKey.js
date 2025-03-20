const apikey = 'https://dummyjson.com/products'

export const fetchSelectedPro = async (id) => {
    const res = await fetch(`${apikey}/${id}`)
    const data = await res.json()
    return data
}

export const fetchProductData = async (limit) => {
    const Apikey = `https://dummyjson.com/products?limit=${limit}`
    const res = await fetch(Apikey)
    const data = await res.json()
    return data
}

export const fetchSkipedProductData = async (limit, skip) => {
    const Apikey = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    const res = await fetch(Apikey)
    const data = await res.json()
    return data
}

export const fetchCategory = async () => {
    const Api = 'https://dummyjson.com/products/categories'
    const res = await fetch(Api)
    const data = await res.json()
    return data
}

export const fetchRelatedCategory = async (category) => {
    const Api = `https://dummyjson.com/products/category/${category}?limit=8`
    const res = await fetch(Api)
    const data = await res.json()
    return data
}



