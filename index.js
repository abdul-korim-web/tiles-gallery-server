import express from "express"
import cors from "cors"
const app =  express()

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).json({success: true,message:"server is running"})

})
const product =  [
    {
      "id": "tile_001",
      "title": "Ocean Blue Ceramic Tile",
      "description": "Glossy ocean-inspired ceramic tile",
      "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800",
      "category": "ceramic",
      "price": 46,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_002",
      "title": "Luxury White Marble Tile",
      "description": "Premium marble tile with natural veins",
      "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "category": "marble",
      "price": 90,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Marble",
      "inStock": true
    },
    {
      "id": "tile_003",
      "title": "Wood Texture Floor Tile",
      "description": "Warm wooden texture ceramic tile",
      "image": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800",
      "category": "wood",
      "price": 40,
      "currency": "USD",
      "dimensions": "15x60 cm",
      "material": "Porcelain",
      "inStock": true
    },
    {
      "id": "tile_004",
      "title": "Modern Geometric Tile",
      "description": "Stylish geometric patterned tile",
      "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      "category": "decorative",
      "price": 55,
      "currency": "USD",
      "dimensions": "30x30 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_005",
      "title": "Stone Grey Minimal Tile",
      "description": "Elegant stone finish minimal tile",
      "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "category": "stone",
      "price": 50,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Stone",
      "inStock": true
    },
    {
      "id": "tile_006",
      "title": "Gold Accent Luxury Tile",
      "description": "Premium gold accent decorative tile",
      "image": "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800",
      "category": "luxury",
      "price": 120,
      "currency": "USD",
      "dimensions": "30x30 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_007",
      "title": "Matte Black Modern Tile",
      "description": "Sleek matte black surface tile",
      "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "category": "modern",
      "price": 65,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Porcelain",
      "inStock": true
    },
    {
      "id": "tile_008",
      "title": "Vintage Pattern Tile",
      "description": "Classic vintage inspired design tile",
      "image": "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800",
      "category": "vintage",
      "price": 58,
      "currency": "USD",
      "dimensions": "30x30 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_009",
      "title": "Nature Green Tile",
      "description": "Green natural ceramic tile",
      "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "category": "nature",
      "price": 42,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_010",
      "title": "Polished White Tile",
      "description": "Glossy polished modern tile",
      "image": "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800",
      "category": "polished",
      "price": 70,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Porcelain",
      "inStock": true
    },
    {
      "id": "tile_011",
      "title": "Rustic Brick Wall Tile",
      "description": "Traditional brick style tile",
      "image": "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800",
      "category": "brick",
      "price": 33,
      "currency": "USD",
      "dimensions": "20x10 cm",
      "material": "Clay",
      "inStock": true
    },
    {
      "id": "tile_012",
      "title": "Deep Ocean Blue Tile",
      "description": "Dark ocean inspired ceramic tile",
      "image": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
      "category": "ceramic",
      "price": 48,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_013",
      "title": "Minimal Beige Tile",
      "description": "Soft beige aesthetic tile",
      "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      "category": "minimal",
      "price": 40,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Porcelain",
      "inStock": true
    },
    {
      "id": "tile_014",
      "title": "Artistic Mosaic Tile",
      "description": "Colorful mosaic tile design",
      "image": "https://images.unsplash.com/photo-1576016770956-debb63d92058?w=800",
      "category": "art",
      "price": 95,
      "currency": "USD",
      "dimensions": "30x30 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_015",
      "title": "Granite Dark Tile",
      "description": "Strong granite texture tile",
      "image": "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800",
      "category": "granite",
      "price": 110,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Granite",
      "inStock": true
    },
    {
      "id": "tile_016",
      "title": "Soft Pink Decorative Tile",
      "description": "Elegant pink soft finish tile",
      "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "category": "decorative",
      "price": 52,
      "currency": "USD",
      "dimensions": "30x30 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_017",
      "title": "Industrial Cement Tile",
      "description": "Raw cement style tile",
      "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "category": "industrial",
      "price": 60,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Cement",
      "inStock": true
    },
    {
      "id": "tile_018",
      "title": "Marble Gold Vein Tile",
      "description": "Luxury marble with gold veins",
      "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "category": "luxury",
      "price": 150,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Marble",
      "inStock": true
    },
    {
      "id": "tile_019",
      "title": "Modern Grey Tile",
      "description": "Clean grey modern tile",
      "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      "category": "modern",
      "price": 44,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_020",
      "title": "Sand Texture Tile",
      "description": "Natural sand texture tile",
      "image": "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800",
      "category": "textured",
      "price": 38,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Stone",
      "inStock": true
    }
  ]

app.get("/product",(req,res)=>{
    
    res.status(200).json({
        success: true,
        message: "product found",
        product
    })
})

// app.listen(5000)
export default app