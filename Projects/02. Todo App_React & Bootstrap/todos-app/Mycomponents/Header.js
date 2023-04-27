import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
};
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: false,
};

function Header(props) {
  return (
    <>
      <nav className="navbar text-center py-3">
        <div className="container-fluid row row-cols-1 row-cols-sm-2 row-cols-lg-3 m-auto">
          {/* Name & Logo */}
          <div className="p-2 col d-flex justify-content-center align-items-center">
            <h1 className="fw-bold fs-1 title me-3">{props.title}</h1>
            <div>
              <img alt="Logo" width="45" src={mainLogo} />
            </div>
          </div>
          {/* Input Form for Searhing task  */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="py-5 col"
            role="search"
          >
            <input
              className="form-control inputBox m-auto py-2"
              type="search"
              value={props.filterText}
              placeholder="Search your assigned tasks here...."
              onChange={(e) => props.onFilterTextChange(e.target.value)}
            />
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
