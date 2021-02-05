import React from "react";

const Nav = (props) => {

    return ( 
    <div>
        <ul className="nav-product">
            <li>Bộ lọc:</li>
            <li><a>Giày nam</a></li>
            <li><a>Giày nữ</a></li>
            <li>
                <select className="sort" onChange={props.handleSort} defaultValue="Sort" >
                    <option disabled value="Sort">Sort</option>
                    <option value="Asc">A-Z</option>
                    <option value="Desc" >Z-A</option>
                    <option value="HighValues">Giá tăng</option>
                    <option value="LowValues">Giá giảm</option>
                </select>
            </li>
        </ul>
    </div>
    )
}

export default Nav;