// import React from "react";
// import Navbar from "./Navbar";
// import TextField from "@mui/material/TextField";
// import "../CSS/UC.scss";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

// function UpdateCat() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log(location.state);
//   const [values, setValues] = useState(location.state);
//   console.log(values, "aaaa");

//   const [tag_name, settag_name] = useState("");

//   const getvalue = () => {
//     settag_name(values.tag_name);
//   };
//   useEffect(() => {
//     getvalue();
//   }, []);

//   const handleSubmit = async () => {
//     let item = {
//       tag_name,
//     };
//     console.log("handleSubmit clicked", item);
//     const apiEndpoint =
//       "http://174.138.101.222:8080/" + values._id + "/updateTag";
//     const requestOptions = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(item),
//     };

//     fetch(apiEndpoint, requestOptions)
//       .then((response) => {
//         if (response.status === 200) {
//           return response.json().then((data) => {
//             alert("Update");
//             navigate("/taglist");
//           });
//         } else if (response.status === 400) {
//           return response.json().then((data) => {
//             alert("data not added");
//           });
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="parentContainer">
//         <h1>
//           <span className="pointer" onClick={() => navigate(-1)}>
//             <HiOutlineArrowSmallLeft />
//           </span>
//           <span>Update Category</span>
//         </h1>
//         <div className="personalcontainer">
//           {/* <p className="personaltext">Category</p> */}
//           <div className="formbox">
//             <div className="formbox1">
//               <TextField
//                 id="standard-basic"
//                 label="Tag Name  *"
//                 name="categories_Name_English"
//                 variant="standard"
//                 className="personalinput"
//                 value={tag_name}
//                 onChange={(e) => settag_name(e.target.value)}
//               />

//               <button className=" btn  personalbtn" onClick={handleSubmit}>
//                 Update{" "}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UpdateCat;



















import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Navbar from "./Navbar";
import TextField from "@mui/material/TextField";
import "../CSS/UC.scss";

function UpdateCat() {
  const navigate = useNavigate();
  const location = useLocation();
  const [values, setValues] = useState(location.state || {});
  const [tag_name, setTagName] = useState(values.tag_name || "");

  useEffect(() => {
    setTagName(values.tag_name || "");
  }, [values]);

  const handleSubmit = async () => {
    const item = {
      tag_name,
    };

    const apiEndpoint = `http://174.138.101.222:8080/${values._id}/updateTag`;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    try {
      const response = await fetch(apiEndpoint, requestOptions);

      if (response.status === 200) {
        const data = await response.json();
        alert("Update");
        navigate("/taglist");
      } else if (response.status === 400) {
        const data = await response.json();
        alert("Data not added");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="parentContainer">
        <h1>
          <span className="pointer" onClick={() => navigate(-1)}>
            <HiOutlineArrowLeft />
          </span>
          <span>Update Category</span>
        </h1>
        <div className="personalcontainer">
          <div className="formbox">
            <div className="formbox1">
              <TextField
                id="standard-basic"
                label="Tag Name *"
                name="categories_Name_English"
                variant="standard"
                className="personalinput"
                value={tag_name}
                onChange={(e) => setTagName(e.target.value)}
              />

              <button className="btn personalbtn" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateCat;
