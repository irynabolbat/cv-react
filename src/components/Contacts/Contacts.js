import React from 'react';
import style from './Contact.module.css'
import {Envelope, GeoAlt, Github, Linkedin, Telephone} from "react-bootstrap-icons";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <h3 className={style.contacts_header}>Contacts</h3>
            <ul className={style.contacts_wrapper}>
                <li className={style.contact_link_container}>
                    <a href='mailto:irinabolbat@gmail.com' className={style.contact_link}>
                        <Envelope/>
                        irinabolbat98@gmail.com
                    </a>
                </li>
                <li className={style.contact_link_container}>
                    <a href='https://www.linkedin.com/in/iryna-bolbat-011204209/' className={style.contact_link}>
                        <Linkedin/>
                        <span>Iryna Bolbat</span>
                    </a>
                </li>
                <li className={style.contact_link_container}>
                    <a href='https://github.com/irinabolbat' className={style.contact_link}>
                        <Github/>
                        irinabolbat
                    </a>
                </li>
                <li className={style.contact_link_container}>
                    <a href='https://t.me/irina_bolbat' className={style.contact_link}>
                        <Telephone/>
                        +38 (095) 606 67 19
                    </a>
                </li>
                <li className={`${style.contact_link_container} ${style.location}`}>
                    <span>
                        <GeoAlt/>
                        Kharkiv, Ukraine
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Contacts;