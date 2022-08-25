import React from 'react';
import style from "./Languages.module.css";
import {Cursor} from "react-bootstrap-icons";

const Languages = () => {
    const myLanguages = ['Russian', 'Ukrainian', 'English']
    return (
        <div className={style.languages}>
            <h3 className={style.languages_header}>Languages</h3>
            <ul className={style.languages_wrapper}>
                {myLanguages.map((language, index) => (
                    <li className={style.languages_container} key={index+1}>
                    <span className={style.language}>
                        <Cursor/>
                        {language}
                    </span>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Languages;