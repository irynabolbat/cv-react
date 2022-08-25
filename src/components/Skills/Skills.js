import React from 'react';
import style from './Skills.module.css'
import {Cursor} from "react-bootstrap-icons";

const Skills = () => {
    const mySkills = ['HTML', 'CSS', 'Git', 'Java Script', 'React', 'React Hooks', 'React Redux']
    return (
        <div className={style.skills}>
            <h3 className={style.skills_header}>Skills</h3>
            <ul className={style.skills_wrapper}>
                {mySkills.map((skill, index) => (
                    <li className={style.skill_container} key={index+1}>
                        <span className={style.skill}>
                            <Cursor />
                            {skill}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;