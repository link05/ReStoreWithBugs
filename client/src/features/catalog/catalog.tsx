import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5207/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []); 
  //putting depednecy of empty array means it runs only once...meaning on rerender it doesnt run.
  //if you want it to get called on re-renders then remove the []

  
  
    return (
        <div>
        <ProductList products={products}/>
        <Button variant='contained' >Add product</Button>
      </div>
    )  
}