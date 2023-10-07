import React, { useEffect, useState } from "react";
import "../CSS/News-Approval.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { FiEye } from "react-icons/fi";

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
        `http://174.138.101.222:8080/UserRoleList`
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
      .delete(`http://174.138.101.222:8080/${_id}/deleteUserRole/`)
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
          <span style={{fontFamily:'Rooboto'}}>Role Based User List</span>
        </h1>

        <table>
          <thead>
            <tr>
              <th style={{fontFamily:'Rooboto'}}>User Name</th>
              <th style={{fontFamily:'Rooboto'}}>First Name</th>
              <th style={{fontFamily:'Rooboto'}}>Middle Name</th>
              <th style={{fontFamily:'Rooboto'}}>Last Name</th>
              <th style={{fontFamily:'Rooboto'}}>Department</th>
              <th style={{fontFamily:'Rooboto'}} >User Role</th>
              <th style={{fontFamily:'Rooboto'}}>Email</th>
              <th style={{fontFamily:'Rooboto'}}>Mobile</th>
              <th style={{fontFamily:'Rooboto'}}>Residential Address</th>
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
                    <td style={{fontFamily:'Rooboto'}}>{item.first_name}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.middle_name}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.last_name}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.department}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.user_role}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.email_1}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.mobile_1}</td>
                    <td style={{fontFamily:'Rooboto'}}>{item.address}</td>

                    <td style={{fontFamily:'Rooboto'}}>
                      <div>
                        <span
                          className="pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/updaterolebaseduserlist", {
                              state: item,
                            });
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
