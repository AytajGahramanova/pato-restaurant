import React, { useState } from "react";
import axios from "axios";
import "../../../pages/client/Contact/style.css";
import Header from "../../../components/client/Header";
import Main from "../../../pages/client/Home/sections/Main";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const addValue = async () => {
    const res = await axios.post("http://localhost:3000/users", {
      name,
      phone,
      email,
      textarea,
    });
    console.log(res);
  };
  return (
    <div>
      <Header />
      <Main />

      <form action="" style={{ background: "#EFEFEFa", padding: 20 }}>
        <div className="container">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=19uQKD9DwQh2Kr4HtAVuSRp1sLUs&hl=en&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: 80,
            }}
          >
            <div className="content-title">SEND US A MESSAGE</div>
            <div className="form-wrapper">
              <div className="form-control">
                <div className="form-control-input">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-control-input">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control-input">
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="contact-textarea">
                <label htmlFor="">Message</label>
                <textarea
                  placeholder="Message"
                  value={textarea}
                  onChange={(e) => setTextarea(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button className="contact-button" onClick={() => addValue()}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
          <div className="contact-us-wrapper">
            <div className="location">
              <LocationOnIcon />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 30,
                }}
              >
                <p>LOCATION</p>
                <span>8th floor, 379 Hudson St, New York, NY 10018</span>
              </div>
            </div>
            <div className="call-us">
              <PhoneIcon />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 30,
                }}
              >
                <p>CALL US</p>
                <span>(+1) 96 716 6879</span>
              </div>
            </div>
            <div className="opening-hours">
              <AccessTimeIcon />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 30,
                }}
              >
                <p>OPENING HOURS</p>
                <span>
                  09:30 AM – 11:00 PM
                  <br />
                  Every Day
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
