import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function AddAccount() {
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
                <li className="nav-item has-treeview">
                  <a href="" className="nav-link">
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
                      <Link to="/list-product" className="nav-link ">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Sản phẩm</p>
                      </Link>
                    </li>
                  </ul>
                  <li className="nav-item">
                    <Link to="/list-account" className="nav-link active">
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
                  <h1 className="m-0 text-dark">Tài khoản</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/admin">Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active">Tài khoản</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- /.content-header --> */}

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <Link to="/list-account" className="btn btn-primary">
                        Quay lại
                      </Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                      <form
                        method="post"
                        action=""
                        modelAttribute="user"
                        enctype="multipart/form-data"
                      >
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            path="username"
                          />
                          <small
                            id="emailHelp"
                            className="form-text text-muted"
                          >
                            Nhập email.
                          </small>
                        </div>
                        <div className="form-group">
                          <label>Mật khẩu</label>
                          <input
                            type="password"
                            className="form-control"
                            path="password"
                          />
                          <small
                            id="emailHelp"
                            className="form-text text-muted"
                          >
                            Nhập mật khẩu.
                          </small>
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Lưu trữ
                        </button>
                      </form>
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
export default AddAccount;
