import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function ListAccount() {
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
                      <Link to="/add-account" className="btn btn-primary">
                        Thêm mới
                      </Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                      <table
                        id="example1"
                        className="table table-bordered table-striped"
                      >
                        <thead>
                          <tr>
                            <th>Stt</th>
                            <th>Email</th>
                            <th>Tùy chọn</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Email</td>
                            <td>
                              <Link to="/edit-account" title="Sửa">
                                <i className="fas fa-edit"></i>
                              </Link>
                              <a
                                href=""
                                data-toggle="modal"
                                data-target="#exampleModal"
                                title="Xóa"
                              >
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>

                          {/* <!-- Modal --> */}
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Thông báo
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  Xác nhận xóa sản phẩm này??
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Bỏ
                                  </button>
                                  <a
                                    href=""
                                    type="button"
                                    className="btn btn-danger"
                                  >
                                    Xóa
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </tbody>
                        <tfoot>
                          <tr>
                          <th>Stt</th>
                            <th>Email</th>
                            <th>Tùy chọn</th>
                          </tr>
                        </tfoot>
                      </table>
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
export default ListAccount;
