const express = require('express')
const port = 81
const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // replace * with your client's origin as needed
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }
    next();
});


const products =

    [
        {
            "id": 1,
            "name": "T-shirt",
            "brand": "Adidas",
            "description": "A stylish T-shirt from Adidas featuring the Real Madrid logo. Made with high-quality materials for comfort and durability.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/files/home-pod-weir_535x.jpg?v=1694523452",
            "price": 150
        },
        {
            "id": 2,
            "name": "T-shirt",
            "brand": "Adidas",
            "description": "Another sleek T-shirt option from Adidas, showcasing the Real Madrid emblem. Designed for both comfort and style.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/files/third-pod-bellingham_535x.jpg?v=1694523452",
            "price": 250
        },
        {
            "id": 3,
            "name": "T-shirt",
            "brand": "Adidas",
            "description": "An away jersey T-shirt by Adidas, featuring the iconic Real Madrid colors. Perfect for showing support during away games.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/files/away-pod-alaba_535x.jpg?v=1694523452",
            "price": 200
        },
        {
            "id": 4,
            "name": "T-shirt",
            "brand": "Adidas",
            "description": "Goalkeeper-themed T-shirt from Adidas, designed with the Real Madrid goalkeeper in mind. Stand out on the field with this unique shirt.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/files/gk-pod-misa_535x.jpg?v=1694523452",
            "price": 300
        },
        {
            "id": 5,
            "name": "Backpack",
            "brand": "Adidas",
            "description": "A sturdy backpack by Adidas, featuring the Real Madrid crest. Ideal for carrying essentials to training sessions or matches.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/products/RMCFBG0056-1_533x.jpg?v=1695115368",
            "price": 120
        },
        {
            "id": 6,
            "name": "football",
            "brand": "Adidas",
            "description": "High-quality football designed by Adidas, featuring the Real Madrid club logo. Perfect for matches or training sessions.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/products/RMCFEQ0068-02_533x.jpg?v=1691153224",
            "price": 50
        },
        {
            "id": 7,
            "name": "Gloves",
            "brand": "Adidas",
            "description": "Adidas gloves designed for football, featuring the Real Madrid branding. Keep your hands warm and protected during games.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/files/RMCFMK0067_500x480.jpg?v=1686814230",
            "price": 70
        },
        {
            "id": 8,
            "name": "scarf",
            "brand": "Adidas",
            "description": "A stylish scarf by Adidas, adorned with the Real Madrid crest. Keep warm while showing your support for the team.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/products/RMCFMK0068-03_720x.jpg?v=1685973681",
            "price": 50
        },
        {
            "id": 9,
            "name": "Cap",
            "brand": "Adidas",
            "description": "Adidas cap featuring the Real Madrid logo. Protect yourself from the sun while representing your favorite football club.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/products/RMCFMH0073-01_500x480.jpg?v=1685973669",
            "price": 90
        },
        {
            "id": 10,
            "name": "Duffle Bag",
            "brand": "Adidas",
            "description": "Spacious duffle bag by Adidas, perfect for carrying gear to and from training sessions or games. Features the Real Madrid emblem.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/files/RMCFBG0019-01_500x480.jpg?v=1687798963",
            "price": 100
        },
        {
            "id": 11,
            "name": "Trainer Pencil Case",
            "brand": "Adidas",
            "description": "Pencil case designed like a trainer, perfect for storing school or office supplies. Features Real Madrid branding.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/products/RMCFOF0017-01_500x480.jpg?v=1688634083",
            "price": 80
        },
        {
            "id": 12,
            "name": "Black Ceramic Mug crest",
            "brand": "Adidas",
            "description": "Black ceramic mug featuring the Real Madrid crest. Enjoy your favorite beverage while showing support for the team.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/products/RMCFBV0034-02_500x480.jpg?v=1664971435",
            "price": 75
        },
        {
            "id": 13,
            "name": "Crest Keyring",
            "brand": "Adidas",
            "description": "Keyring featuring the Real Madrid crest. Perfect for keeping your keys organized while displaying your team pride.",
            "imgUrl": " https://shop.realmadrid.com/cdn/shop/products/Real-Madrid-Crest-Keyring_500x480.jpg?v=1598480512",
            "price": 60
        },
        {
            "id": 14,
            "name": "Crest Reversible Beanie ",
            "brand": "Adidas",
            "description": "Reversible beanie featuring the Real Madrid crest. Keep warm in style during the colder months.",
            "imgUrl": "https://shop.realmadrid.com/cdn/shop/products/RMCFYK0009_01_533x.jpg?v=1642255200",
            "price": 30
        },
        {
            "id": 15,
            "name": "Bracelet  ",
            "brand": "Adidas",
            "description": "Bracelet featuring the Real Madrid logo. A subtle accessory to show your support for the team.",
            "imgUrl": " https://shop.realmadrid.com/cdn/shop/products/RMCFNV0387-01_500x480.jpg?v=1691486309",
            "price": 10
        },
        {
            "id": 16,
            "name": "Viceroy Watch",
            "brand": "Adidas",
            "description": "Stylish watch by Viceroy featuring the Real Madrid logo. Keep track of time while showcasing your support for your team",
            "imgUrl": " https://shop.realmadrid.com/cdn/shop/products/RMCFJB0003-01_500x480.jpg?v=1682348873",
            "price": 120
        }
    ]


app.use(express.json())

app.get("/product", (req, res) => {
    res.json(products)
})
app.get("/product/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Product not found" });
    }
});





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});