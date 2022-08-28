import React, {useEffect, useState} from 'react';
import style from './MyProjects.module.css'
import {Cursor} from "react-bootstrap-icons";

const MyProjects = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 500);
        });
    }, []);
    return (
        <div className={!scroll ? style.my_projects : `${style.my_projects} ${style.active}`}>
            <h3 className={style.my_projects_header}>My projects</h3>
            <ul className={style.my_projects_wrapper}>
                <li className={style.my_projects_container}>
                    <a href='https://github.com/eleks-bootcamp/water-control' className={style.project_link}>
                        <Cursor/>
                        Water control (Work in team)
                    </a>
                    <ul>
                        <li className={style.my_work_in_project}>Login/Registration form</li>
                        <li className={style.my_work_in_project}>User settings</li>
                        <li className={style.my_work_in_project}>Add firebase</li>
                        <li className={style.my_work_in_project}>Hamburger menu</li>
                    </ul>
                </li>
                <li className={style.my_projects_container}>
                    <a href='https://irinabolbat.github.io/online-store-react/' className={style.project_link}>
                        <Cursor/>
                        Online shop (first React project)
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MyProjects;