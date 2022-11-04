import React from "react";
require('./index.scss')

export interface propsItemI {
    id: number,
    name: string,
    season: string,
    product: number,
    setProduct: React.Dispatch<React.SetStateAction<number>>
}

export const Item = (props: propsItemI) => {

    return(
        <div className={(props.product === props.id) ? "wrapper_item_selected" : "wrapper_item"}
             onClick={() => {props.setProduct(props.id)}}
        >
            <div className={"item__img"}>
                <img
                    src={require(`../../img/product_${props.id}.png`)}
                    alt={`item-${props.id}`}
                />
            </div>
            <div className={"item__text"}>
                <p>{props.name}</p>
                <p>{props.season}</p>
            </div>
        </div>
    )
}