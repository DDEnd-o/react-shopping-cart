import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";
import styles from "./ProductsGrid.module.scss";
import Search from './SearchBar';
import Nav from './Nav';

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);
  

  return (
    <div className={styles.p__container}>
      <div className="row">
        <div className="col-sm-8">
          <Nav />
          <div className="py-3">{products.length} Products</div>
        </div>
        <div className="col-sm-4">
          <Search/>
        </div>
      </div>
      <div className={styles.p__grid}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            category={product.category}
          />
        ))}
      </div>
      <div className={styles.p__footer}></div>
    </div>
  );
};

export default ProductsGrid;
