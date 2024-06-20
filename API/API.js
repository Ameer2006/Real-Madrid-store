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
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F3DBfGMyHw7c2YdBJOqmMGh%2F7523115f2a8bd053f7cfd3e59d2cf13d%2Fnav-menu-320x320-away.jpg&w=1080&q=100",
            "price": 150
        },
        {
            "id": 2,
            "name": "T-shirt",
            "brand": "Adidas",
            "description": "Another sleek T-shirt option from Adidas, showcasing the Real Madrid emblem. Designed for both comfort and style.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2FRI2DKyCzZi2rlHK2jjGcI%2F8af536a2da2666f2e7992636a72aa1f3%2Fnav-menu-320x320-shop_by_player.jpg&w=1080&q=100",
            "price": 250
        },
        {
            "id": 3,
            "name": "T-shirt",
            "brand": "Adidas",
            "description": "An away jersey T-shirt by Adidas, featuring the iconic Real Madrid colors. Perfect for showing support during away games.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F4S0Y3ahJ0pne482FPdFcrn%2Fa623640fb747d9053dd81d657e859b6e%2Fnav-menu-320x320-gk__1_.jpg&w=1080&q=100",
            "price": 200
        },
        {
            "id": 4,
            "name": "T-shirt",
            "brand": "Adidas",
            "description": "Goalkeeper-themed T-shirt from Adidas, designed with the Real Madrid goalkeeper in mind. Stand out on the field with this unique shirt.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F5ynkHmHhwB1NnQLPiYXyLr%2F1bbc3dbd41fac9f77fbeac2175fda492%2Fnav-menu-320x320-kroos.jpg&w=1080&q=100",
            "price": 300
        },
        {
            "id": 5,
            "name": "Backpack",
            "brand": "Adidas",
            "description": "A sturdy backpack by Adidas, featuring the Real Madrid crest. Ideal for carrying essentials to training sessions or matches.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFBG0038-01.jpg%3Fv%3D1687961660&w=384&q=100",
            "price": 120
        },
        {
            "id": 6,
            "name": "football",
            "brand": "Adidas",
            "description": "High-quality football designed by Adidas, featuring the Real Madrid club logo. Perfect for matches or training sessions.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFEQ0077-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50",
            "price": 50
        },
        {
            "id": 7,
            "name": "Gloves",
            "brand": "Adidas",
            "description": "Adidas gloves designed for football, featuring the Real Madrid branding. Keep your hands warm and protected during games.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFEQ0060.jpg%3Fv%3D1657870684&w=384&q=50",
            "price": 70
        },
        {
            "id": 8,
            "name": "scarf",
            "brand": "Adidas",
            "description": "A stylish scarf by Adidas, adorned with the Real Madrid crest. Keep warm while showing your support for the team.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMK0073-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50",
            "price": 50
        },
        {
            "id": 9,
            "name": "Cap",
            "brand": "Adidas",
            "description": "Adidas cap featuring the Real Madrid logo. Protect yourself from the sun while representing your favorite football club.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMH0088-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50",
            "price": 90
        },
        {
            "id": 10,
            "name": "Duffle Bag",
            "brand": "Adidas",
            "description": "Spacious duffle bag by Adidas, perfect for carrying gear to and from training sessions or games. Features the Real Madrid emblem.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFBG0022-01.jpg%3Fv%3D1682348909&w=384&q=50",
            "price": 100
        },
        {
            "id": 11,
            "name": "Pencil Case",
            "brand": "Adidas",
            "description": "Pencil case designed like a trainer, perfect for storing school or office supplies. Features Real Madrid branding.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFOF0006-01.jpg%3Fv%3D1682348932&w=384&q=50",
            "price": 80
        },
        {
            "id": 12,
            "name": "Black Ceramic Mug crest",
            "brand": "Adidas",
            "description": "Black ceramic mug featuring the Real Madrid crest. Enjoy your favorite beverage while showing support for the team.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFBV0053-01.jpg%3Fv%3D1706696615&w=384&q=50",
            "price": 75
        },
        {
            "id": 13,
            "name": "Crest Keyring",
            "brand": "Adidas",
            "description": "Keyring featuring the Real Madrid crest. Perfect for keeping your keys organized while displaying your team pride.",
            "imgUrl": " https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FReal-Madrid-Crest-Keyring.jpg%3Fv%3D1592821394&w=384&q=50",
            "price": 60
        },
        {
            "id": 14,
            "name": "Crest Reversible Beanie ",
            "brand": "Adidas",
            "description": "Reversible beanie featuring the Real Madrid crest. Keep warm in style during the colder months.",
            "imgUrl": "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFYK0009_01_11b333c3-58f3-451e-9faf-e239bb2be2ed.jpg%3Fv%3D1642255540&w=384&q=50",
            "price": 30
        },
        {
            "id": 15,
            "name": "Bracelet  ",
            "brand": "Adidas",
            "description": "Bracelet featuring the Real Madrid logo. A subtle accessory to show your support for the team.",
            "imgUrl": " https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFNV0787-02.jpg%3Fv%3D1679581867&w=384&q=50",
            "price": 10
        },
        {
            "id": 16,
            "name": "Viceroy Watch",
            "brand": "Adidas",
            "description": "Stylish watch by Viceroy featuring the Real Madrid logo. Keep track of time while showcasing your support for your team",
            "imgUrl": " https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Ffiles%2FRMCFJB0008-01.jpg%3Fv%3D1689165560&w=384&q=50",
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
