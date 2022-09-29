import React from 'react';
import style from "./Education.module.css";
import {Cursor} from "react-bootstrap-icons";

const Courses = () => {
    const myCourses = ['React, Redux: January 2022 - present', 'Java Script: June 2021 - present',
        'HTML, CSS: May 2021 - June 2021']
    return (
        <div>
            <h3 className={style.education_header}>Courses</h3>
            <ul className={style.education_wrapper}>
                {myCourses.map((course, index) => (
                    <li className={style.education_container} key={index + 1}>
                    <span className={style.education}>
                        <Cursor />
                        {course}
                    </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;