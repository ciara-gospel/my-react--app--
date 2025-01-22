import { useState } from 'react'
import Head from './components/head'
import About from './components/about'
import Listitem from './components/listitem'
import Basket from './components/basket'
import './App.css'

function App() {

  const groceries = [
    {
        id: 1,
        name: 'Apples',
        description: 'Crisp and sweet red apples.',
        price: 2.50,
        image: 'https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small_2x/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png',
    },
    {
        id: 2,
        name: 'Bananas',
        description: 'soft, sweet and reconfortable',
        price: 1.20,
        image: 'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjQwMDBkOWQxODAzNTQzOWIzNTRkMTM0Yzg0NzZhNjFiIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=1f9ff610dcf16db66520535b5486ac743ef10be7766d32b1f02c8cd959b31703',
    },
    {
        id: 3,
        name: 'eggs',
        description: 'healthy,powerful , important',
        price: 3.99,
        image: 'https://png.pngtree.com/png-vector/20240907/ourmid/pngtree-basket-of-eggs-in-high-resolution-3d-render-png-image_13783450.png',
    },
    {
        id: 4,
        name: 'carrot',
        description: 'Sweet and healthy, and fresh',
        price: 4.50,
        image: 'https://5.imimg.com/data5/UQ/UI/RY/SELLER-21442513/carrot-500x500.png',
    },
    {
        id: 5,
        name: 'Electric pot',
        description: 'Very quick and facilate work',
        price: 5.99,
        image: 'https://cdn.bestsuppliers.com/seo_products_img/cnjieweishi/1601075842717/f38a2af8d7b03b5294dc61aaa3eb6cac.png!/rotate/180/sq/400',
    },
    {
        id: 6,
        name: 'Heels',
        description: 'Make your legs confortable',
        price: 7.50,
        image: 'https://png.pngtree.com/png-clipart/20240625/original/pngtree-golden-high-heels-png-image_15407831.png',
    },
    {
        id: 7,
        name: 'Kettle',
        description: 'Resistance and unbrokable',
        price: 4.29,
        image: 'https://gor.hgecdn.net/medias/MB-PIMG-AAA2C01ACC1BCFB67DE360F804A82B52-MABAGOR-515Wx515H?context=bWFzdGVyfG1hYmFnb3Jwcm9kdWN0aW1hZ2VzfDE5NjUzMXxpbWFnZS9wbmd8YUdOakwyZzVNUzg1TWpnek5ERXpNREUyTmpBMkwwMUNYMUJKVFVkZlFVRkJNa013TVVGRFF6RkNRMFpDTmpkRVJUTTJNRVk0TURSQk9ESkNOVEpmVFVGQ1FVZFBVaTAxTVRWWGVEVXhOVWd8YTMyYTc4MzFjZTE2OTEwNzA1OTVhNjQ1ZGRjODI2OTY5YzFiMmRjMmZiM2UzYjg3ZTZkNDU5ZDExMGM4NWZmZQ',
    },
    {
        id: 8,
        name: 'Samsung S24 Ultra',
        description: '256GB, performant phones',
        price: 3.89,
        image: 'https://media2.congstar-media.de/fileadmin/files_congstar_fair/endgeraete/samsung/samsung-galaxy-s24-ultra/samsung-galaxy-s24-ultra-titanium-violet-0.png',
    },
    {
        id: 9,
        name: 'Imac Laptop ',
        description: 'Very resistant, 8GB of ram',
        price: 4.99,
        image: 'https://qskinz.com/cdn/shop/files/MacBookAIR2022c.png?v=1691074503',
    },
]

const [basket, setBasket] = useState([])
const addProduct = (id, quantity) => {
  // Get the product from the groceries array
  const product = groceries.find((product) => product.id === id);

  // Create a new basket array to avoid mutating the state directly
  const newBasket = [...basket];

  // Find the index of the product in the basket
  const index = newBasket.findIndex((item) => item.id === product.id);

  // If the product is already in the basket, update the quantity
  if (index >= 0) {
    newBasket[index].quantity += quantity;
    
    // If the quantity is 0 or less, remove the product from the basket
    if (newBasket[index].quantity <= 0) {
      newBasket.splice(index, 1);
    }

    // Update the new basket with the new array
  } else if (quantity > 0) {
    newBasket.push({
      ...product,
      quantity: quantity,
    });
  }

  // Update the basket state with the new basket array
  setBasket(newBasket);
}
  return (
    
      <div className="root-container">

        <div>
        
             <Head></Head>
             <h1></h1>
             <About></About>
             <h4>OUR PRODUCTS</h4>
             <div className="all">
             <div className="objects">
      {groceries.map((product) => (
        <Listitem
        // consumed by react
        key={product.id}
        // consumed by the compoent
        product={product}
        onAddProduct={addProduct}
        />
      ))}
       </div>
      <Basket basket={basket}/>
      
    </div>
    </div>
    </div>
  )
}

export default App
