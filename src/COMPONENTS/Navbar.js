import React from "react";
import "../CSS/Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NewsApproval from "./News-Approval";
const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="navbarcontainer bg-dark">
        <img src="\images\newspaperwala logo (1).png" className="newslogo" />

        <Link to={"/dashboard"}>
          <p style={{ fontFamily: "Roboto" }} className="dashboard">
            MAIN DASHBOARD
          </p>
        </Link>

        {/* REGISTRATION DROPDOWN START  */}

        <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            REGISTRATION
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/role">
              {" "}
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                ROLE BASED USER
              </p>
            </Link>
            <Link to="/vendor">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                VENDOR REGISTRATION
              </p>
            </Link>
          </div>
        </div>

        {/* REGISTRATION DROPDOWN END  */}

        {/* CONTENT MANAGEMENT DROPDOWN START  */}

        {/* <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            CONTENT MANAGEMENT
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={"/addNewsArticle"} className="dropdown-item">
              ADD NEWS ARTICLE
            </Link>
            <a className="dropdown-item">ARTICLE LIST</a>
            <a className="dropdown-item">VEIW NEWS</a>
          </div>
        </div> */}
        {/* CONTENT MANAGEMENT DROPDOWN END  */}

        {/* POST NEWS DROPDOWN START  */}

        <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            POST NEWS
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* <Link to={"/viewNews"} className="dropdown-item">
              VIEW NEWS
            </Link> */}
            <Link
              to={"/news-approval"}
              className="dropdown-item"
              style={{ fontFamily: "Roboto" }}
            >
              APPROVE NEWS
            </Link>
            <Link
              to={"/addNewsArticle"}
              className="dropdown-item"
              style={{ fontFamily: "Roboto" }}
            >
              ADD NEWS ARTICLE
            </Link>
            {/* <a className="dropdown-item" href="#">
              SCHEDULE NEWS
            </a> */}
          </div>
        </div>

        {/* POST NEWS DROPDOWN END  */}

        {/* AD MANAGEMENT DROPDOWN START  */}

        <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            AD MANAGEMENT
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link
              to={"/create-ad"}
              className="dropdown-item"
              style={{ fontFamily: "Roboto" }}
            >
              CREATE AN AD
            </Link>
          </div>
        </div>

        {/* <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            AD MANAGEMENT
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={"/create-ad"} className="dropdown-item">
              CREATE AN AD
            </Link>
            <a className="dropdown-item" href="#">
              AD LIST
            </a>
            <a className="dropdown-item" href="#">
              AD SETTING
            </a>
            <a className="dropdown-item" href="#">
              AD MANAGEMENT
            </a>
            <a className="dropdown-item" href="#">
              AD SETTING TOPICS
            </a>
          </div>
        </div> */}

        {/* AD MANAGEMENT DROPDOWN END  */}

        {/* ROLES DROPDOWN START  */}
        <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ROLES
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* <a className="dropdown-item" href="#">
              ROLES MANAGEMENT
            </a> */}
            <Link
              to={"/RoleManagement"}
              className="dropdown-item"
              style={{ fontFamily: "Roboto" }}
            >
              ROLES MANAGEMENT
            </Link>
            {/* <a className="dropdown-item" href="#">
              VENDOR REGISTRATION
            </a> */}
          </div>
        </div>

        {/* ROLES DROPDOWN END  */}

        {/* E-PAPER DROPDOWN START  */}

        <div className="dropdown dropdowns">
          <Link to={"/epaper"}>
            <p style={{ fontFamily: "Roboto" }} className="epaper">
              E-PAPER
            </p>
          </Link>
          {/* <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            E-PAPER
          </p> */}
          {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              ROLE BASED USER
            </a>
            <a class="dropdown-item" href="#">
              VENDOR REGISTRATION
            </a>
          </div> */}
        </div>

        {/* E-PAPER DROPDOWN END  */}

        <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MASTER
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/categorys">
              {" "}
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Category
              </p>
            </Link>
            <Link to="/tags">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Tags
              </p>
            </Link>
            <Link to="/location">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Location
              </p>
            </Link>
          </div>
        </div>

        <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            LISTING
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/rolebaseduserlist">
              {" "}
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Role Based User List
              </p>
            </Link>
            <Link to="/vendorregistrationlist">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Vendor Registration List
              </p>
            </Link>
            <Link to="/categorylist">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Category List
              </p>
            </Link>
            <Link to="/taglist">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Tag List
              </p>
            </Link>
            <Link to="/advertisementlist">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Advertisement List
              </p>
            </Link>
          </div>
        </div>

        <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            SETTING
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* <Link to="/templatesett">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Template
              </p>
            </Link> */}
            {/* <Link to="/advertisement">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Advertisement Setting
              </p>
            </Link> */}
            {/* <Link to="/categorysetting">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Category Setting
              </p>
            </Link> */}
          </div>
        </div>

        <Link to={"/Template_selection"}>
          <p style={{ fontFamily: "Roboto" }} className="dashboard">
            TEMPLATE SELECTION
          </p>
        </Link>

        {/* <Link to={"/Template_selection"} className="dropdown-item">
        TemplateSelection
            </Link> */}

        <Link onClick={logout} to={"/"}>
          <p style={{ fontFamily: "Roboto" }} className="dashboard">
            LOGOUT
          </p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
