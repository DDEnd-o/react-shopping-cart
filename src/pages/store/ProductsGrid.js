import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";
import styles from "./ProductsGrid.module.scss";
import Nav from './Nav';

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(products);
  const [sort, setSorted] = useState([]);
 
  const handleSearch = value => {
    setSearch(value);
    filterdata(value);
  }

  const filterdata = value =>{
    const lowerCaseValue = value.toLowerCase().trim();
    if(lowerCaseValue === ""){
      setData(products);
    }else{
      const filterdata = products.filter(product => {
        return Object.keys(product).some(key =>{
          return product[key].toString().toLowerCase().includes(lowerCaseValue);
        })
      });
      console.log("aaaaaaaaaaa")
      setData(filterdata);
    }
  }
  

  function handleSort(e) {
    setSorted(e.target.value)
  }
    useEffect(() => {
      
      if(sort === 'Asc'){
        setSorted(
          products.sort((a,b) =>(a.name > b.name) ? 1 : -1)
        )
        console.log(products)
      }
      if(sort === 'Desc'){
        setSorted(
          products.sort((a,b) => (a.name < b.name) ? 1 : -1)
        )
        console.log(products)
      }
      if(sort === 'HighValues'){
        setSorted(
          products.sort((a,b) => (a.price > b.price) ? 1 : -1)
        )
        console.log(products)
        }
      if(sort === 'LowValues'){
        setSorted(
          products.sort((a,b) => (a.price < b.price) ? 1 : -1)
        )
        console.log(products)
        }
      if(sort ==='Sort'){
          setSorted(products)
        }

      
    },[sort,products])

  
  return (
    <div className={styles.p__container}>
      <div className="row">
        <div className="col-sm-8">

          <Nav handleSort={handleSort} />

          <div className="py-3"> {data.length} Products</div>
        </div>
        <div className="col-sm-4">

            <form className="form-group">
            <input
              type="text"
              value={search}
              placeholder="Search product"
              className="form-control"
              onChange= {e => handleSearch(e.target.value)}
            />
          </form>
          

        </div>
      </div>


      <div className={styles.p__grid} >
    
        {data.map((product,i) => (
          <ProductItem
            key={i}
            product={product}
            category={product.category}
          />
        ))}
        
      </div>
      
      {/* <div className={styles.p__footer}></div> */}
    </div>
  );
};

export default ProductsGrid;
