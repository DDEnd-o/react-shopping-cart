import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Layout from "../../../components/Layout";
import styles from "../ProductsGrid.module.scss";

const DetailProduct = ({ product }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <Layout title="Store" description="This is the Store page">
      <div className={styles.p__container}>
        <div className="row mt-5">
          <div className="product-pic col-6">
            <div className="pic-main-product">
              <img id="pic-main-product" src="../img/product/1.jpg" alt="" />
            </div>
          </div>

          <div className="datail-product col-6">
            <form action="">
              <h3 className="font-weight-bold mt-2">Shoes 1</h3><span> - Giày Nam - </span>
              <p className="card-price">100000</p>
            
              <ul className="list-content">
                <li>Thanh toán khi nhận hàng</li>
                <li> 180 ngày đổi trả miễn phí</li>
                <li> Đảm bảo hàng đúng như mô tả</li>
                <li> Hoàn tiền 200% khi hàng không đẩm bảo chất lượng</li>
              </ul>

              <div className="action_bottom mt-3">
                {isInCart(product) && (
                  <button
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Add more
                  </button>
                )}

                {!isInCart(product) && (
                  <button
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="description m-4">
            <h2 className="collapsible">Chi tiết sản phẩm</h2>
            <div className="content mt-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Eum voluptatibus vel nemo
                harum dolorem recusandae architecto quasi rem, facere qui
                voluptatem minima. Sequi sunt laudantium, voluptatem hic ex
                omnis ducimus! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Adipisci amet facilis modi molestiae autem at
                non iure obcaecati quidem sed soluta ducimus earum, error
                molestias laborum impedit repellat architecto dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailProduct;