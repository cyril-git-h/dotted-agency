import React, { useEffect, useState } from "react";
import axios from "axios";

function SubscriptionInner() {
  let [email, setEmail] = useState("");
  let [status, setStatus] = useState("init");

  const instance = axios.create({
    baseURL: "https://<domain>/api",
  });
  function subscribe(e: any) {
    e.preventDefault();
    instance
      .post("/subscribe", {
        email,
      })
      .then(() => setStatus("success"))
      .catch(() => setStatus("failed"));
  }

  if (status === "success") {
    return (
      <div className="contact-form">
        <h1 className="contact-form__success">thank you</h1>
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div className="contact-form">
        <h1 className="contact-form__fail">error</h1>
      </div>
    );
  }
  return (
    <div className="contact-form">
      <form onSubmit={subscribe} className="form" autoComplete="off">
        <div className="contact-form__col contact-form__col--sub">
          <label htmlFor="sub">
            <span>E-mail</span>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            name="sub"
          />
        </div>
        <div className="contact-form__col contact-form__col--submit">
          <button type="submit" className="button contact-form__button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubscriptionInner;