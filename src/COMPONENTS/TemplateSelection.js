import React, { useState } from "react";
import "../CSS/ViewNews.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../COMPONENTS/Image/template_website_1.png";
import img2 from "../COMPONENTS/Image/template_website_2.PNG";
import img3 from "../COMPONENTS/Image/template_website_3.png";
import img4 from "../COMPONENTS/Image/template_website_4.PNG";
import img5 from "../COMPONENTS/Image/template_website_5.png";

const TemplateSelection = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const [style, setStyle] = useState("navbarbox");

  const changeStyle = () => {
    setStyle((prev) => {
      if (prev === "navbarbox") {
        setStyle("navbarbox2");
      } else setStyle("navbarbox");
    });
  };

  return (
    <>
      <Navbar />
      {" "}
      <div className="parentContainer">
        <div className="navbarbox">
        </div>
        <div className="parentContainernew">
          <h1 className="bg-blue">
            <div
              className="dashwithfav"
              style={{
                display: "flex",
                background: "rgb(49, 70, 177)",
                color: "white",
              }}
            >
              <div style={{ paddingLeft: "1%", paddingBottom: "1%" }}>
                <span
                  onClick={() => navigate(-1)}
                  className="pointer rightShift"
                >
                  {/* <HiOutlineArrowSmallLeft className="rightShift" /> */}
                  <p style={{ fontFamily: "Roboto", }} className="dashboardtext">
                    <div> Template Selection</div>

                  </p>
                </span>
              </div>

              {/* 
              <div  className="parentContainertableu">
          <h1>
            <span>
              <HiOutlineArrowSmallLeft
                onClick={back}
                className="pointertable"
              />
            </span>
            <span>Template Selection</span>
          </h1>
        </div> */}

              <div className="onclick" onClick={changeStyle}>
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>
          </h1>
          <h5 className="px-4" style={{ marginTop: "15px", fontFamily: 'Rooboto' }}>
            To use any of the available Template in your website , just simply
            update the record in your domain DNS configuration with the url
            provided in the Template below.
          </h5>

          <div className="container" style={{ marginTop: "15px" }}>
            <div className="row" style={{ marginTop: "15px" }}>
              <div className="d-flex px-3 col">
                <div className="card " style={{ width: "27.5rem" }}>
                  <img
                    className="card-img-top"
                    // src={require("../Images/template_website_1.png")}
                    src={img1}
                    alt="Card image cap"
                    width={"100%"}
                    height={"200px"}
                  />
                  <div className="card-body">
                    <h5 style={{ fontFamily: 'Rooboto' }} className="card-title d-flex justify-content-center font-weight-bold">
                      Template 1
                    </h5>
                    <a className="card-text d-flex justify-content-center">
                      {`http://174.138.101.222:7000/64b666b58baee257c737615e`}
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex px-3 col">
                <div className="card " style={{ width: "27.5rem" }}>
                  <img
                    className="card-img-top"
                    // src={require("../Images/template_website_2.PNG")}
                    src={img2}
                    alt="Card image cap"
                    width={"100%"}
                    height={"200px"}
                  />
                  <div className="card-body">
                    <h5 style={{ fontFamily: 'Rooboto' }} className="card-title d-flex justify-content-center font-weight-bold">
                      Template 2
                    </h5>
                    <a className="card-text d-flex justify-content-center">
                      {`http://174.138.101.222:1000/64b666b58baee257c737615e`}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-3 row" style={{ marginTop: "15px" }}>
              <div className="d-flex px-3 col">
                <div className="card " style={{ width: "27.5rem" }}>
                  <img
                    className="card-img-top"
                    // src={require("../Images/template_website_3.png")}
                    src={img3}
                    alt="Card image cap"
                    width={"100%"}
                    height={"200px"}
                  />
                  <div className="card-body">
                    <h5 style={{ fontFamily: 'Rooboto' }} zz className="card-title d-flex justify-content-center font-weight-bold">
                      Template 3
                    </h5>
                    <a className="card-text d-flex justify-content-center">
                      {`http://174.138.101.222:2000/64b666b58baee257c737615e`}
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex px-3 col">
                <div className="card " style={{ width: "27.5rem" }}>
                  <img
                    className="card-img-top"
                    // src={require("../Images/template_website_4.PNG")}
                    src={img4}
                    alt="Card image cap"
                    width={"100%"}
                    height={"200px"}
                  />
                  <div className="card-body">
                    <h5 style={{ fontFamily: 'Rooboto' }} className="card-title d-flex justify-content-center font-weight-bold">
                      Template 4
                    </h5>
                    <a className="card-text d-flex justify-content-center ">
                      {`http://174.138.101.222:8000/64b666b58baee257c737615e`}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-3 row" style={{ marginTop: "15px" }}>
              <div className="d-flex px-3 col">
                <div className="card " style={{ width: "27.5rem" }}>
                  <img
                    className="card-img-top"
                    // src={require("../Images/template_website_5.png")}
                    src={img5}
                    alt="Card image cap"
                    width={"100%"}
                    height={"200px"}
                  />
                  <div className="card-body">
                    <h5 style={{ fontFamily: 'Rooboto' }} className="card-title d-flex justify-content-center font-weight-bold">
                      Template 5
                    </h5>
                    <a className="card-text d-flex justify-content-center">
                      {`http://174.138.101.222:9000/64b666b58baee257c737615e`}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateSelection;
