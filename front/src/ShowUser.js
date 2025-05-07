import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./assets/css/ShowUser.css";


function ShowUser() {
  const navigate = useNavigate();
  const [student, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/fetch-user").then((e) => {
      console.log(e.data.list_of_user);
      console.log(e.data.message);
      console.log(e.data.status);
      setUser(e.data.list_of_user);
    });
  }, []);

  return (
    <>
     <div>
          <button className="logout-btn" onClick={() => navigate("/logout")}>
            <span>Logout</span>
          </button>
        </div>
      <div className="card container">
       
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <td>Username</td>
                <td>created_at</td>
                <td>updated_at</td>
              </tr>
            </thead>
            <tbody>
              {student.map((item, index) => {
                return (
                  <>
                    <tr key={item.id}>
                      <td>{item.username}</td>
                      <td>{item.created_at}</td>
                      <td>{item.updated_at}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ShowUser;
