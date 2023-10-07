import React, { useEffect, useState } from "react";
import "../CSS/News-Approval.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const NewsApproval = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const [status, setStatus] = React.useState("");

  ///////////////////////// Get API to get Unfiltered News ///////////////////////////

  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/VendorList`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////delete api /////////////////

  function deleteUser(_id) {
    axios
      .delete(`http://174.138.101.222:8080/${_id}/deleteVendor/`)
      .then((r) => {
        console.log(r);
        getData();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  //////////////////////////////////////////delete api////////////////////

  return (
    <>
      <Navbar />
      <div className="parentContainer">
        <h1>
          <span>
            <HiOutlineArrowSmallLeft onClick={back} className="pointer" />
          </span>
          <span style={{ fontFamily: "Rooboto" }}>
            Vendor Registration List
          </span>
        </h1>

        <table>
          <thead>
            <tr>
              <th style={{fontFamily:'Rooboto'}}>S.No.</th>
              <th style={{fontFamily:'Rooboto'}}>Publisher Name</th>
              <th style={{fontFamily:'Rooboto'}}>Email Id</th>
              <th style={{fontFamily:'Rooboto'}}>Tech Person Contact Name</th>
              <th style={{fontFamily:'Rooboto'}}>Finance Contact Name</th>
              <th style={{fontFamily:'Rooboto'}}>Registered Address</th>
              <th style={{fontFamily:'Rooboto'}}>Communication Address</th>
              <th style={{fontFamily:'Rooboto'}}>Domain Name</th>
              <th style={{fontFamily:'Rooboto'}}>Site Display Contact</th>
              <th style={{fontFamily:'Rooboto'}}>Edit</th>
              <th style={{fontFamily:'Rooboto'}}>Delete</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr>
                    <td style={{fontFamily:'Rooboto'}}>{index + 1}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.publisher_name}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.email}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.tech_name}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.finance_name}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.regd_address}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.comm_address}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.domain_name}</td>
                    <td style={{fontFamily:'Rooboto'}}> {item.site_display_contact}</td>

                    <td style={{fontFamily:'Rooboto'}}>
                      <div>
                        <span
                          className="pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/updatevendorlist", { state: item });
                          }}
                        >
                          <FaEdit />
                        </span>
                      </div>
                    </td>
                    <td style={{fontFamily:'Rooboto'}}>
                    <FaTrash onClick={() => deleteUser(item._id)} />

                    </td>
                  </tr>
                );
              })}
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
};

export default NewsApproval;
