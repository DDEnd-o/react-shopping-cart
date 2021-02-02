import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Store from "../pages/store";
import NotFound from "../pages/NotFound";
import Cart from "../pages/cart";
import DetailProduct from "../pages/store/detail/DetailProduct";
import Login from "../pages/login/DangNhap";
import Admin from '../pages/admin/index';
import ListCategory from "../pages/admin/category/ListCategory";
import AddCategory from "../pages/admin/category/AddCategory";
import EditCategory from "../pages/admin/category/EditCategory";
import ListProduct from "../pages/admin/product/ListProduct";
import AddProduct from "../pages/admin/product/AddProduct";
import EditProduct from "../pages/admin/product/EditProduct";
import ListAccount from '../pages/admin/accounts/ListAccount';
import AddAccount from '../pages/admin/accounts/AddAccount';
import EditAccount from '../pages/admin/accounts/EditAccount';
import auth from "js-cookie";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Store} />
        <Route exact path="/detail/:id" component={DetailProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin}/>
        <Route path="/list-category" component={ListCategory} />
        <Route path="/add-category" component={AddCategory} />
        <Route path="/edit-category" component={EditCategory} />
        <Route path="/list-product" component={ListProduct} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/edit-product" component={EditProduct} />
        <Route path="/add-account" component={AddAccount} />
        <Route path="/list-account" component={ListAccount} />
        <Route path="/edit-account" component={EditAccount} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
