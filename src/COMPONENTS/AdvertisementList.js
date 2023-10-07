import React, { useEffect, useState } from "react";
import "../CSS/News-Approval.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const NewsApproval = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  ///////////////////////// Get API to get Unfiltered News ///////////////////////////

  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/64b68dc78baee257c7376185/listadvertisements`
      );
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////delete api ////////////////////////////////

  function deleteUser(_id) {
    axios
      .delete(`http://174.138.101.222:8080/${_id}/delete-advertisements/`)
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
          <span style={{ fontFamily: "Rooboto" }}>Advertisement List</span>
        </h1>

        <table>
          <thead>
            <tr>
              <th style={{fontFamily:'Rooboto'}}>S.No.</th>
              <th style={{fontFamily:'Rooboto'}}>Vendor Name</th>
              <th style={{fontFamily:'Rooboto'}}>Template</th>
              <th style={{fontFamily:'Rooboto'}}>Page Location</th>
              <th style={{fontFamily:'Rooboto'}}>Images</th>
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
                    <td style={{fontFamily:'Rooboto'}}>{}</td>
                    <td style={{fontFamily:'Rooboto'}}>{}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.page_location}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.image}</td>

                    <td style={{fontFamily:'Rooboto'}}>
                      <div>
                        <span
                          className="pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/updateCat", { state: item });
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
