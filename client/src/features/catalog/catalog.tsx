import { Button } from "@mui/material";
import ProductList from "./ProductList";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";



export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

  useEffect(() => {
      if(!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]); 
  //putting depednecy of empty array means it runs only once...meaning on rerender it doesnt run.
  //if you want it to get called on re-renders then remove the []

    if(status.includes('pending')) return <LoadingComponent message="Loading products..."/>
  
    return (
        <div>
        <ProductList products={products}/>
        <Button variant='contained' >Add product</Button>
      </div>
    )  
}