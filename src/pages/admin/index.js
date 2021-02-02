import React from "react";
import Navbar from "./Navbar";
import { Link, Redirect } from "react-router-dom";
import { Component } from "react";


class Home extends React.Component {
    constructor(props){
      super(props)
      const token = localStorage.getItem("token")

      let loggedIn = true;
      if(token == null){
        loggedIn = false
      }

      this.state = {
        loggedIn
      }
    }
  render(){
      if(this.state.loggedIn == false){
        return <Redirect to="/login" />
      }
    return (
      <div className="wrapper">
        {/* Navbar */}
        <Navbar></Navbar>
        {/* /Navbar */}
  
        {/* <!-- Main Sidebar Container --> */}
        <aside side className="main-sidebar sidebar-dark-primary elevation-4">
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
                <li className="nav-item has-treeview">
                  <Link to="/admin" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>Thống kê</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <a href="" className="nav-link ">
                    <i className="nav-icon fas fa-chart-pie"></i>
                    <p>
                      Quản lý
                      <i className="right fas fa-angle-left">       </i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/list-category" className="nav-link">
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
                </li>
                <li className="nav-item">
                  <Link to="/list-account" className="nav-link">
                    <i className="nav-icon far fa-user"></i>
                    <p>Tài khoản</p>
                  </Link>
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
                  <h1 className="m-0 text-dark">Thống kê</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/admin">Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active">Thống kê</li>
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
                  {/* <!-- Main content --> */}
                  <div className="invoice p-3 mb-3">
                    <div className="info-box mb-3 bg-warning">
                      <span className="info-box-icon">
                        <i className="fas fa-money-check-alt"></i>
                      </span>
  
                      <div className="info-box-content">
                        <span className="info-box-text">Tổng thu nhập</span>
                        <span className="info-box-number">2000000 vnđ</span>
                      </div>
                      {/* <!-- /.info-box-content --> */}
                    </div>
  
                    <div className="row">
                      <div className="col-lg-3 col-6">
                        {/* <!-- small box --> */}
                        <div className="small-box bg-info">
                          <div className="inner">
                            <h3>12</h3>
  
                            <p>Số sản phẩm trong shop</p>
                          </div>
                          <div className="icon">
                            <i className="ion ion-bag"></i>
                          </div>
                          <Link to="/list-product" className="small-box-footer">
                            Xem thêm <i className="fas fa-arrow-circle-right"></i>
                          </Link>
                        </div>
                      </div>
                      {/* <!-- ./col --> */}
                      <div className="col-lg-3 col-6">
                        {/* <!-- small box --> */}
                        <div className="small-box bg-warning">
                          <div className="inner">
                            <h3>3</h3>
  
                            <p>Người dùng đăng kí</p>
                          </div>
                          <div className="icon">
                            <i className="ion ion-person-add"></i>
                          </div>
                          <Link to="/list-account" className="small-box-footer">
                            Xem thêm <i className="fas fa-arrow-circle-right"></i>
                          </Link>
                        </div>
                      </div>
                      {/* <!-- ./col --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- /.content --> */}
          </div>
          {/* <!-- /.content-wrapper --> */}
        </div>
        {/* <!-- ./wrapper --> */}
      </div>
    );
  }
}
export default Home;
