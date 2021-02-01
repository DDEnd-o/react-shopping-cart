import React from "react";

class Nav extends React.Component {

    render() {
        return ( 
        <div>
            <ul className="nav-product">
                <li>Bộ lọc:</li>
                <li><a>Giày nam</a></li>
                <li><a>Giày nam</a></li>
                <li>
                    <select className="filter">
                        <option value="">A-Z</option>
                        <option value="">Z-A</option>
                        <option value="">Giá tăng</option>
                        <option value="">Giá giảm</option>
                    </select>
                </li>
            </ul>
        </div>
        );
    }
}

export default Nav;