import { render } from "@testing-library/react";
import React from "react";
import { Link, Redirect } from "react-router-dom";

class Navbar extends React.Component {
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

  onDel= (e) =>{
    localStorage.clear();
    if(this.state.loggedIn == false){
        return <Redirect to="/login" />
      }


  }

  render(){
    return (
      <>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* <!-- Left navbar links --> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="!#"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="/" className="nav-link">
                Quay lại trang chủ
              </a>
            </li>
          </ul>
          {/* <!-- Right navbar links --> */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              
              <button
                className="nav-link"
                type="submit"
                data-toggle="modal"
                onClick={this.onDel}
              >
                <Link to= "/login">Đăng xuất</Link>
              </button>
            </li>
          </ul>
        </nav>
  
        {/* <div
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
                <h5 className="modal-title" id="exampleModalLabel">
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
                Bạn có chắc muốn đăng xuất không????
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Không
                </button>

                
                <button
                   onClick={this.onDel}
                  type="submit"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                ><Link to="/login">
                  Có</Link>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default Navbar;
