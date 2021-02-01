import React from "react";

class SearchBar extends React.Component {

  render() {
    return (
      <form className="form-group">
        <input
          type="text"
          name=""
          placeholder="Search product"
          className="form-control"
        />
      </form>
    );
  }
}

export default SearchBar;
