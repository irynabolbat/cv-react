import React from 'react';
import style from "./Education.module.css";
import {Cursor} from "react-bootstrap-icons";

const Courses = () => {
    const myCourses = [
        {
            course: 'React, Redux: January 2022 - present',
            learned: 'Basic knowledge in React, work in team, work with gh-pages, firebase experience'
        },
        {
            course: 'Java Script: June 2021 - present',
            learned: 'Basic knowledge in Java Script, work with axios and fetch requests'
        },
        {
            course: 'HTML, CSS: May 2021 - June 2021',
            learned: 'Basic knowledge in HTML and CSS, work with Bootstrap, Responsive Web Design experience'
        },
    ]

    return (
        <div>
            <h3 className={style.education_header}>Courses</h3>
            <ul className={style.education_wrapper}>
                {myCourses.map((course, index) => (
                    <li className={style.education_container} key={index + 1}>
                        <span className={style.education}>
                            <Cursor/>
                            {course.course}
                        </span>
                        <span className={style.course_learned}>{course.learned}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;