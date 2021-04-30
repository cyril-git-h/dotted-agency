import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  let [clientName, setClientName] = useState("");
  let [clientCompany, setClientCompany] = useState("");
  let [clientCity, setClientCity] = useState("");
  let [clientEmail, setClientEmail] = useState("");
  let [clientPhone, setClientPhone] = useState("");
  let [status, setStatus] = useState("init");

  const instance = axios.create({
    baseURL: "https://<domain>/api",
  });
  function sendData(e: any) {
    e.preventDefault();
    instance
      .post("/data", {
        clientName,
        clientCompany,
        clientEmail,
        clientCity,
        clientPhone,
      })
      .then(() => setStatus("success"))
      .catch(() => setStatus("failed"));
  }

  if (status === "success") {
    return (
      <section className="section">
        <div className="container">
          <div className="contact-form">
            <h1 className="contact-form__title">
              I want to work together on my project
            </h1>
            <h1 className="contact-form__success">application submitted</h1>
          </div>
        </div>
      </section>
    );
  }
  if (status === "failed") {
    return (
      <section className="section">
        <div className="container">
          <div className="contact-form">
            <h1 className="contact-form__title">
              I want to work together on my project
            </h1>
            <h1 className="contact-form__fail">error</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-aos="fade-up" className="section">
      <div className="container">
        <div className="contact-form">
          <h1 className="contact-form__title">
            I want to work together on my project
          </h1>
          <form className="form" onSubmit={sendData} autoComplete="off">
            <div className="contact-form__row">
              <div className="contact-form__col">
                <label htmlFor="name">
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  name="name"
                />
              </div>
              <div className="contact-form__col">
                <label htmlFor="company">
                  <span>Company name</span>
                </label>
                <input
                  type="text"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  required
                  name="company"
                />
              </div>
            </div>
            <div className="contact-form__row">
              <div className="contact-form__col">
                <label htmlFor="email">
                  <span>E-mail</span>
                </label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                  name="email"
                />
              </div>
              <div className="contact-form__col">
                <label htmlFor="city">
                  <span>City</span>
                </label>
                <input
                  type="text"
                  value={clientCity}
                  onChange={(e) => setClientCity(e.target.value)}
                  required
                  name="city"
                />
              </div>
            </div>
            <div className="contact-form__row">
              <div className="contact-form__col">
                <label htmlFor="tel">
                  <span>Phone</span>
                </label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  required
                  name="tel"
                />
              </div>
            </div>
            <div className="contact-form__row">
              <div className="contact-form__col contact-form__col--submit">
                <button className="button contact-form__button">Apply</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

