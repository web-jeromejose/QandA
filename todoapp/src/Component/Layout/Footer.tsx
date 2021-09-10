import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      {/* <div className="navbar navbar-expand-sm">
        <footer className="mt-auto py-3 container text-center">
          &copy; QA Ltd 2019-{new Date().getFullYear()}
        </footer>
      </div> */}
      <footer className="text-center mt-auto  py-1">
        <div className="inner">
          <p>&copy; JFJ Ltd 2019-{new Date().getFullYear()}</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
