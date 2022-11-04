const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

//методы
app.get('/items', async function (req, res) {
    try {
        const items = dataBase
        console.log(items);
        res.status(200).send(items);
    } catch (e) {
        console.warn(e);
        res.send('error');
    }
})
app.get('/item', async function (req, res) {
    console.log(req.query)
    try {
        let index
        for (let i in dataBase) {
            if (dataBase[i].id === Number(req.query.id)) {
                console.log(dataBase[i])
                index = i
                break
            }
        }
        const item = dataBase[index]
        if (item) {
            res.status(200).send(item);
        } else {
            res.status(500).send(`error: no item with id ${req.query.id}`)
        }
    } catch (e) {
        console.warn(e);
        res.send('error');
    }
})

app.listen(3001, () => console.log(`app started on port ${3001}`))

// data
const dataBase = [
    {
        "id": 1,
        "name": "SKU 1",
        "desc": "SKU 1 full description",
        "img": "/path_to_local_storage/product_1.png",
        "season": "winter",
        "textiles": [
            {
                "title": "Textile title 1",
                "desc": "Textile 1 description",
                "material": "Textile material 1",
                "images": [
                    "/path_to_local_storage/textile_1.png",
                    "/path_to_local_storage/textile_2.png",
                    "/path_to_local_storage/textile_3.png"
                ],
                "comments": [
                    {
                        "text": "Comment 1",
                        "author": "Author 1"
                    },
                    {
                        "text": "Comment 2",
                        "author": "Author 1"
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "SKU 2",
        "desc": "SKU 2 full description",
        "img": "/path_to_local_storage/product_1.png",
        "season": "summer",
        "textiles": [
            {
                "title": "Textile title 2",
                "desc": "Textile 2 description",
                "material": "Textile material 2",
                "images": [
                    "/path_to_local_storage/textile_1.png",
                    "/path_to_local_storage/textile_2.png",
                    "/path_to_local_storage/textile_3.png"
                ],
                "comments": []
            }
        ]
    },
    {
        "id": 3,
        "name": "SKU 3",
        "desc": "SKU 3 full description",
        "img": "/path_to_local_storage/product_1.png",
        "season": "spring",
        "textiles": [
            {
                "title": "Textile title 3",
                "desc": "Textile 3 description",
                "material": "Textile material 3",
                "images": [
                    "/path_to_local_storage/textile_1.png",
                    "/path_to_local_storage/textile_2.png",
                    "/path_to_local_storage/textile_3.png"
                ],
                "comments": [
                    {
                        "text": "Comment 1",
                        "author": "Author 1"
                    },
                    {
                        "text": "Comment 2",
                        "author": "Author 1"
                    },
                    {
                        "text": "Comment 3",
                        "author": "Author 2"
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "name": "SKU 4",
        "desc": "SKU 4 full description",
        "img": "/path_to_local_storage/product_1.png",
        "season": "spring",
        "textiles": [
            {
                "title": "Textile title 4",
                "desc": "Textile 4 description",
                "material": "Textile material 4",
                "images": [
                    "/path_to_local_storage/textile_1.png",
                    "/path_to_local_storage/textile_2.png",
                    "/path_to_local_storage/textile_3.png"
                ],
                "comments": [
                    {
                        "text": "Comment 1",
                        "author": "Author 1"
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "name": "SKU 5",
        "desc": "SKU 5 full description",
        "img": "/path_to_local_storage/product_1.png",
        "season": "winter",
        "textiles": [
            {
                "title": "Textile title 5",
                "desc": "Textile 5 description",
                "material": "Textile material 5",
                "images": [
                    "/path_to_local_storage/textile_1.png",
                    "/path_to_local_storage/textile_2.png",
                    "/path_to_local_storage/textile_3.png"
                ],
                "comments": [
                    {
                        "text": "Comment 1",
                        "author": "Author 1"
                    },
                    {
                        "text": "Comment 2",
                        "author": "Author 1"
                    },
                    {
                        "text": "Comment 3",
                        "author": "Author 2"
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "name": "SKU 6",
        "desc": "SKU 6 full description",
        "img": "/path_to_local_storage/product_1.png",
        "season": "autumn",
        "textiles": [
            {
                "title": "Textile title 6",
                "desc": "Textile 6 description",
                "material": "Textile material 6",
                "images": [
                    "/path_to_local_storage/textile_1.png",
                    "/path_to_local_storage/textile_2.png",
                    "/path_to_local_storage/textile_3.png"
                ],
                "comments": [
                    {
                        "text": "Comment 1",
                        "author": "Author 1"
                    },
                    {
                        "text": "Comment 6",
                        "author": "Author 2"
                    }
                ]
            }
        ]
    }
]