import React from "react";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";

function Contact({ id, name, number, deleteContact }) {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.text}>
          <FaUser /> {name}
        </p>
        <p className={s.text}>
          {" "}
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={() => deleteContact(id)} className={s.button}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
