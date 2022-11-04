import axios from 'axios'

const AxiosApiInstance = axios.create({
    baseURL: "http://localhost:3001/"
})

export const DataProvider = {
    getItems() {
        return new Promise((resolve, reject) => {
            AxiosApiInstance.get("/items")
                .then((res: any) => {
                    resolve(res)
                })
                .catch((e: any) => {
                    console.warn(e)
                })
        })
    },
    getItem(id: number) {
        return new Promise((resolve, reject) => {
            AxiosApiInstance.get(`/item?id=${id}`)
                .then((res: any) => {
                    resolve(res)
                })
                .catch((e: any) => {
                    console.warn(e)
                })
        })
    }
}