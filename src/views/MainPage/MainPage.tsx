import {List} from "../../components/List/List";
import {Product} from "../../components/Product/Product";
import {useEffect, useState} from "react";
import {DataProvider} from "../../app/api";

require("./index.scss")

interface itemI {
    id: number,
    name: string,
    desc: string,
    img: string,
    season: string,
    textiles: {
        title: string,
        desc: string,
        material: string,
        images: string[],
        comments: {
            text: string,
            author: string,
        }[]
    }[]
}

export const MainPage = () => {

    // fetch data and init it
    const [items, setItems] = useState<itemI[]>([])
    useEffect(() => {
        if (items.length === 0) {
            DataProvider.getItems()
                .then((res: any) => {
                    setItems(res.data)
                })
        }
    }, [])

    // switch from list to gallery
    const [type, setType] = useState(true)

    // Product sidebar
    const [product, setProduct] = useState<number>(1)
    //useEffect(() => {setProduct(1)},[product])
    const [comments, setComments] = useState<{ author: string, text: string }[]>([])
    useEffect(() => {
        if (items.length > 0) {
            setComments(items[product - 1].textiles[0].comments)
        }
    }, [product, items])
    
    return (
        <div className={"wrapper_main"}>
            <List items={items} product={product} setProduct={setProduct} type={type}/>


            <Product
                type={type}
                setType={setType}
                comments={comments}
            />
        </div>
    )
}