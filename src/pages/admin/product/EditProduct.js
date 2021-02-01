import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function ListProduct() {
  return (
    <>
      <div className="wrapper">
        {/* Navbar */}
        <Navbar></Navbar>
        {/* /Navbar */}

        {/* <!-- Main Sidebar Container --> */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* <!-- Sidebar --> */}
          <div className="sidebar">
            {/* <!-- Sidebar Menu --> */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
                <li className="nav-item has-treeview">
                  <Link to="/admin" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>Thống kê</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview menu-open">
                  <a href="" className="nav-link active">
                    <i className="nav-icon fas fa-chart-pie"></i>
                    <p>
                      Quản lý
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/list-category" className="nav-link ">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Danh mục</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/list-product" className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Sản phẩm</p>
                      </Link>
                    </li>
                  </ul>
                  <li className="nav-item">
                    <Link to="/list-account" className="nav-link">
                      <i className="nav-icon far fa-user"></i>
                      <p>Tài khoản</p>
                    </Link>
                  </li>
                </li>
              </ul>
            </nav>
            {/* <!-- /.sidebar-menu --> */}
          </div>
          {/* <!-- /.sidebar --> */}
        </aside>

        {/* <!-- Content Wrapper. Contains page content --> */}
        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Sản phẩm</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/admin">Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active">Sản phẩm</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- /.content-header --> */}

          <div className="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <Link to="/list-product" class="btn btn-primary">
                        Quay lại
                      </Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                      {/* <!-- Thêm mới --> */}
                      <div class="">
                        <form
                          method="post"
                          action="/admin/products/save-product"
                          modelAttribute="product"
                          enctype="multipart/form-data"
                        >
                          <div class="form-group">
                            <label>Danh mục</label>

                            <select
                              class="form-control form-control-line"
                              path="category.id"
                            >
                              <option value="1" ch>
                                Giày nam
                              </option>
                              <option value="2" selected>
                                Giày nữ
                              </option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label>Tên sản phẩm</label>
                            <input
                              type="text"
                              class="form-control"
                              path="title"
                            />
                          </div>
                          <div class="form-group">
                            <label>Giá bán</label>
                            <input
                              type="text"
                              class="form-control"
                              path="price"
                            />
                            <small id="emailHelp" class="form-text text-muted">
                              Đơn vị tính là VNĐ.
                            </small>
                          </div>
                          

                          <div class="form-group">
                            <label for="exampleFormControlFile1">
                              Hình ảnh
                            </label>
                            <input
                              type="file"
                              class="form-control-file"
                              id="exampleFormControlFile1"
                              name="productAvatar"
                            />
                          </div>

                          <div class="form-group">
                            <label>Mô tả</label>
                            <textarea
                              id="summernote"
                              class="form-control"
                              path="description"
                            />
                          </div>

                          <button type="submit" class="btn btn-primary">
                            Lưu trữ
                          </button>
                        </form>
                      </div>
                      {/* <!-- /Thêm mới --> */}
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!-- /.col --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
            {/* <!-- /.content --> */}
          </div>
          {/* <!-- /.content-wrapper --> */}
        </div>
        {/* <!-- ./wrapper --> */}
      </div>
    </>
  );
}
export default ListProduct;
