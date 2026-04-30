import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import { nav } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

function AdminPanel() {

   let navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("");

  const [doctor, setDoctor] = useState({
    name: "",
    speciality: "",
    degree: "",
    image: "",
    email: ""
  });

  const [doctors, setDoctors] = useState([]);

  const [editId, setEditId] = useState(null); // 🔥 NEW

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const res = await axios.get("http://127.0.0.1:8000/doctor_list/");
    setDoctors(res.data);
  };


  const [appointments, setAppointments] = useState([]);

const fetchappointments = async () => {
  const res = await axios.get("http://127.0.0.1:8000/patient_list/");
  setAppointments(res.data);
};

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  // 🔥 ADD + UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!doctor.name || !doctor.speciality || !doctor.degree) {
      alert("All fields required");
      return;
    }

    try {
      if (editId) {
        // ✏️ UPDATE
        await axios.put(`http://127.0.0.1:8000/doctor_detail/${editId}`, doctor);
        alert("Doctor Updated");
      } else {
        // ➕ ADD
        await axios.post("http://127.0.0.1:8000/doctor_list/", doctor);
        alert("Doctor Added");
      }

      setDoctor({
        name: "",
        speciality: "",
        degree: "",
        image: "",
        email: ""
      });

      setEditId(null); // reset
      fetchDoctors();
      setActiveTab("list");

    } catch (err) {
      console.log(err);
    }
  };

  // ❌ DELETE
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/doctor_detail/${id}`);
    fetchDoctors();
  };

  // 🔥 EDIT CLICK
  const handleEdit = (doc) => {
    setDoctor(doc);     // form fill
    setEditId(doc.id);  // id store
    setActiveTab("add"); // form open
  };

 let Delete = (id) => {
  if (window.confirm("Are you sure to delete?")) {
    axios.delete(`http://127.0.0.1:8000/patient_detail/${id}/`)
      .then(() => {
        alert("Deleted Successfully");
        fetchappointments();
      })
      .catch((err) => console.log(err));
  }
};

  let logout = () => {
    let Confirm =window.confirm("Are you sure you want to logout?")
    if(Confirm){
      
      localStorage.removeItem("user");
      navigate("/")
    }
    else{
      return
    }
  };

  return (
    <>
    <div className="admin-navbar">

  <h2 className="logo">Admin Panel</h2>

  <div className="nav-right">

    <div className="profile">
      👤 Admin
    </div>

    <button className="logout-btn" onClick={logout}>
      Logout
    </button>

  </div>

</div>
    <div className="admin-layout">
 <div className="sidebar">
    <h2>Admin</h2>

    <button
      className={activeTab === "add" ? "active" : ""}
      onClick={() => setActiveTab("add")}
    >
      Add Doctor
    </button>

    <button
      className={activeTab === "list" ? "active" : ""}
      onClick={() => setActiveTab("list")}
    >
      Show Doctors
    </button>

    <button
      className={activeTab === "appointment" ? "active" : ""}
      onClick={() =>{setActiveTab("appointment");
      fetchappointments();} }
    >
      Show Appointment
    </button>
  </div>

      {activeTab === "add" && (
          <form onSubmit={handleSubmit} className="admin-form">

          <div className="form-group">
            <label>Doctor Name</label>
            <input name="name" value={doctor.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Speciality</label>
            <input name="speciality" value={doctor.speciality} onChange={handleChange} />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input name="email" value={doctor.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Degree</label>
            <input name="degree" value={doctor.degree} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input name="image" value={doctor.image} onChange={handleChange} />
          </div>

          <button type="submit">
            {editId ? "Update Doctor" : "Add Doctor"}
          </button>

        </form>
      )}

      {activeTab === "appointment" && (
  <div className="appointment-list">
    {appointments.map((item) => (
      <div key={item.id} className="appointment-card">

        <h3 className="app-name">{item.name}</h3>

        <p><span>Email:</span> {item.email}</p>
        <p><span>Gender:</span> {item.gender}</p>
        <p><span>Age:</span> {item.age}</p>
        <p><span>Speciality:</span> {item.speciality}</p>

        <div className="app-datetime">
          📅 {item.date} | ⏰ {item.time}
        </div>

        <p><span>Symptoms:</span> {item.symptoms}</p>
      <button onClick={() => Delete(item.id)}>Delete</button>
      </div>
    ))}
  </div>
)}

      {/* LIST */}
      {activeTab === "list" && (
          <div className="doctor-list">
          {doctors.map((doc) => (
              <div key={doc.id} className="doctor-card">
              <img src={doc.image} alt="" />
              <h3>{doc.name}</h3>
              <p>{doc.speciality}</p>
              <p>{doc.degree}</p>

              <button  className="edit-btn" onClick={() => handleEdit(doc)}>
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(doc.id)}
                >
                Delete
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
      </>
  );
}

export default AdminPanel;