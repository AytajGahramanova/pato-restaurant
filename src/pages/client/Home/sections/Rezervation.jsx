import React, { useState } from "react";
import axios from "axios";
import "../../../../pages/client/Home/sections/Rezervation.css";

const Rezervation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");

  const addValue = async () => {
    const res = await axios.post("http://localhost:3000/books", {
      name,
      phone,
      email,
      date,
      time,
      people   
    });
    console.log(res);
  };
  return (
    <div className="rezervation">
      <div className="container">
        <div className="rezervation-wrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 100,
            }}
          >
            <div className="book-table">
              <div className="title">Rezervation</div>
              <h3>BOOK TABLE</h3>
            </div>
            <div className="rezervation-content">
              <div style={{ display: "flex", gap: 20 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 20,
                  }}
                >
                  <label htmlFor="">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 20,
                  }}
                >
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: 20 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 20,
                  }}
                >
                  <label htmlFor="">Time</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 20,
                  }}
                >
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: 20 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 20,
                  }}
                >
                  <label htmlFor="">People</label>
                  <input type="text" value={people} 
                   onChange={(e) => setPeople(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 20,
                  }}
                >
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <button className="rezervation-button" onClick={addValue}>BOOK TABLE</button>
            </div>
          </div>
          <div className="rezervation-image">
            <img
              src="https://preview.colorlib.com/theme/pato/images/booking-01.jpg.webp"
              alt=""
              className="zoom-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rezervation;
