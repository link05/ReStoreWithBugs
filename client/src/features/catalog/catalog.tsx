import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
      agent.Catalog.list().then(products => setProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []); 
  //putting depednecy of empty array means it runs only once...meaning on rerender it doesnt run.
  //if you want it to get called on re-renders then remove the []

    if(loading) return <LoadingComponent message="Loading products..."/>
  
    return (
        <div>
        <ProductList products={products}/>
        <Button variant='contained' >Add product</Button>
      </div>
    )  
}