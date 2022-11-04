import React, {useState} from "react";

require("./index.scss")

interface propsI {
    type: boolean,
    setType: React.Dispatch<React.SetStateAction<boolean>>,
    comments: { text: string, author: string }[],
}

export const Product = (props: propsI) => {

    const [page, setPage] = useState<"texts" | "rules" | "supp">("texts")
    const [color, setColor] = useState<number>(1)

    function setupColor(type: "up" | "down") {
        if (type === "up") {
            if (color === 3) {
                setColor(1)
            } else {
                setColor(color + 1)
            }
        }
        if (type === "down") {
            if (color === 1) {
                setColor(3)
            } else {
                setColor(color - 1)
            }
        }
    }

    function shareFunc() {
        const doc = document.documentElement.outerHTML
        const encodeDoc = encodeURI(doc)
        const data = {
            title: 'shared title',
            text: encodeDoc,
            url: 'http://localhost:3000/'
        }
        try {
            navigator.share(data)
                .then((res) => alert('shared!'))
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className={"wrapper_product"}>
            <div className={"product__btns_title"}>
                <button onClick={() => setPage("texts")}>Textiles</button>
                <button onClick={() => setPage("rules")}>Rules</button>
                <button onClick={() => setPage("supp")}>Supplies</button>
            </div>
            {
                (page === "texts")
                    ? <>
                        <div className={"product__material"}>
                            <div className={"product__material__img"}>
                                <img src={require("../../img/textile_1.png")} alt="material"/>
                            </div>
                            <div className={"product__material__description"}>
                                <p>denim</p>
                                <p>Senstile</p>
                                <p>cotton: 100%</p>
                                <p>comments</p>
                                {
                                    props.comments
                                        ? <ul>
                                            {
                                                props.comments.map((i, n) => {
                                                    return <li key={`comment-key-${i.author}-${n}`}>
                                                        {`${i.author}: ${i.text}`}
                                                    </li>
                                                })
                                            }
                                        </ul>
                                        : []
                                }
                            </div>
                        </div>
                        <div className={"product__gallery"}>
                            <p>All colors: blue, brown, gray</p>
                            <div className={"product__gallery__item"}>
                                <button onClick={() => {
                                    setupColor("down")
                                }}>{"<"}</button>
                                <img src={require(`../../img/textile_${color}.png`)} alt="material"/>
                                <button onClick={() => {
                                    setupColor("up")
                                }}>{">"}</button>
                            </div>
                        </div>
                        <div className={"product__btns_footer"}>
                            <button onClick={() => {
                                shareFunc()
                            }}>SHARE
                            </button>
                            <a href="" download={true}>
                                <button>SAVE</button>
                            </a>
                        </div>
                        <button
                            className={"btn_switch"}
                            onClick={() => {
                                props.setType(!props.type)
                            }}
                        >
                            switch to
                            {(props.type) ? " list" : " images"}
                        </button>
                    </>
                    : <p>{page}</p>
            }
        </div>
    )
}