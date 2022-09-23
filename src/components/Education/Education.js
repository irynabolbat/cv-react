import React, {useEffect, useState} from 'react';
import style from './Education.module.css'
import Courses from "./Courses";
import {Cursor} from "react-bootstrap-icons";

const Education = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
    }, []);
    return (
        <div className={!scroll ? style.my_education : `${style.my_education} ${style.active}`}>
            <h3 className={style.education_header}>Education</h3>
                <ul className={style.education_wrapper}>
                    <li className={style.education_container}>
                        <span className={style.education}>
                            <Cursor />
                            Master of Tourism -2021, Kharkiv National University by Karazin, Ukraine
                        </span>
                    </li>
                    <li className={style.education_container}>
                        <span className={style.education}>
                            <Cursor />
                            Bachelor of Tourism -2020, Kharkiv National University by Karazin, Ukraine
                        </span>
                    </li>
                </ul>
            <Courses/>
        </div>
    );
};

export default Education;
