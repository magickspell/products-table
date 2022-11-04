import React, {useState} from "react";
import {Item} from "../Item/Item";

require("./index.scss")

interface propsListI {
    items: {
        id: number,
        name: string,
        season: string,
    }[],
    product: number,
    setProduct: React.Dispatch<React.SetStateAction<number>>,
    type: boolean
}

export const List = (props: propsListI) => {

    const [pag, setPag] = useState(6)
    const [page, setPage] = useState(1)

    return (
        <div className={props.type ? "wrapper_list" : "wrapper_table"}>
            <div className={"pagination"}>
                <p>pagination:</p>
                <button className={pag === 4 ? "active" : ""}
                        onClick={() => {
                            setPag(4)
                            setPage(1)
                        }}
                >4
                </button>
                <button className={pag === 6 ? "active" : ""}
                        onClick={() => {
                            setPag(6)
                            setPage(1)
                        }}
                >6
                </button>
                {
                    pag === 6
                        ? <>
                            <p>page:</p>
                            <button
                                className={page === 1 ? "active" : ""}
                                onClick={() => {
                                    setPage(1)
                                }}
                            >1
                            </button>
                        </>
                        : <>
                            <p>page:</p>
                            <button className={page === 1 ? "active" : ""}
                                    onClick={() => {
                                        setPage(1)
                                    }}
                            >1
                            </button>
                            <button className={page === 2 ? "active" : ""}
                                    onClick={() => {
                                        setPage(2)
                                    }}
                            >2
                            </button>
                        </>
                }
            </div>
            <div className={"list"}>
                {
                    pag === 6
                        ?
                        props.items.map((i) => {
                            return (
                                <Item
                                    key={`item-key-${i.id}`}
                                    id={i.id}
                                    name={i.name}
                                    season={i.season}
                                    product={props.product}
                                    setProduct={props.setProduct}
                                ></Item>
                            )
                        })
                        : props.items.map((i, n) => {
                            if (n <= 3 && page === 1) {
                                return (
                                    <Item
                                        key={`item-key-${i.id}`}
                                        id={i.id}
                                        name={i.name}
                                        season={i.season}
                                        product={props.product}
                                        setProduct={props.setProduct}
                                    ></Item>
                                )
                            }
                            if (n > 3 && page === 2) {
                                return (
                                    <Item
                                        key={`item-key-${i.id}`}
                                        id={i.id}
                                        name={i.name}
                                        season={i.season}
                                        product={props.product}
                                        setProduct={props.setProduct}
                                    ></Item>
                                )
                            }
                        })
                }
            </div>
        </div>
    )
}