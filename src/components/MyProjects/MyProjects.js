import React, {useEffect, useState} from 'react';
import style from './MyProjects.module.css'
import {Cursor} from "react-bootstrap-icons";

const MyProjects = () => {
    const myTasksWaterControl = ['Login/Registration form', 'User settings', 'Adding the firebase', 'Hamburger menu', 'Feedback page', 'Analytics']
    const myTasksOnlineStore = ['Pagination', 'Filters', 'Skeleton', 'Modal window', 'Redux', 'Notifications']
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
    }, []);
    return (
        <div className={!scroll ? style.my_projects : `${style.my_projects} ${style.active}`}>
            <h3 className={style.my_projects_header}>Projects</h3>
            <ul className={style.my_projects_wrapper}>
                <li className={style.my_projects_container}>
                    <a href='https://eleks-bootcamp-water-control.netlify.app/' target="_blank" className={style.project_link}>
                        <Cursor/>
                        Water control (Work in team)
                    </a>
                    <div className={style.my_experience}>My responsibilities:</div>
                    <ul>
                        {
                            myTasksWaterControl.map((task, index) => (
                                <li className={style.my_work_in_project} key={index+1}>{task}</li>
                            ))
                        }
                    </ul>
                </li>
                <li className={style.my_projects_container}>
                    <a href='https://irinabolbat.github.io/online-store-react/' target="_blank"  className={style.project_link}>
                        <Cursor/>
                        Online shop (first React project)
                    </a>
                    <div className={style.my_experience}>Gained experience:</div>
                    <ul>
                        {
                            myTasksOnlineStore.map((task, index) => (
                                <li className={style.my_work_in_project} key={index+1}>{task}</li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default MyProjects;