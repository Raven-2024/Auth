import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./assets/css/ShowUser.css";

function ShowContact() {
  const navigate = useNavigate();
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch contacts with status 1
    axios.get("http://127.0.0.1:8000/api/fetch-contact")
      .then((response) => {
        console.log("API Response:", response.data);
        setContact(response.data.list_of_contact);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <button className="logout-btn" onClick={() => navigate("/logout")}>
          <span>Logout</span>
        </button>
      </div>
      
      <div className="card container mt-4">
        <div className="card-body">
          {/* Removed heading */}
          
          {/* Removed filter form */}
          
          {/* Contacts Table */}
          {loading ? (
            <p className="text-center">Loading contacts...</p>
          ) : (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {contact.length > 0 ? (
                  contact.map((item) => (
                    <tr key={item.id}>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No active contacts found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default ShowContact;