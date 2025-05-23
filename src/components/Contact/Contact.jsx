import css from "./Contact.module.css"

import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { useSelector } from "react-redux";

export const Contact = ({ data: { id, name, number } }) => {
    const contacts = useSelector((state) => state.contacts.items);

    return (

            <div className={css.cont}>
                <div className={css.contactInfo} >
                    <p><FaUser /> {name}</p>
                    <p><FaPhoneAlt /> {number}</p>
                </div>
                <button className={css.contactBtn} onClick={() => deleteContact(id)}>Delete</button>
            </div>
    );
}