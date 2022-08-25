import style from './App.module.css';
import Languages from "./components/Languages/Languages";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Summary from "./components/Summary/Summary";
import photo from "./images/Iryna Bolbat.png";
import React from "react";
import Contacts from "./components/Contacts/Contacts";
import MyProjects from "./components/MyProjects/MyProjects";

function App() {
    return (
        <div className={style.wrapper}>
            <div className={style.left_side}>
                <div className={`${style.profile_info} ${style.profile_left}`}>
                    <h1 className={style.name_header}>Iryna Bolbat</h1>
                    <h2 className={style.profile_position}>Trainee frontend developer(React)</h2>
                </div>
                <div className={style.profile_photo}>
                    <img src={photo} className={style.photo}/>
                </div>
                <Contacts/>
                <Skills/>
                <Languages/>
            </div>

            <div className={style.right_side}>
                <div className={`${style.profile_info} ${style.profile_right}`}>
                    <h1>Iryna Bolbat</h1>
                    <h2 className={style.profile_position}>Trainee frontend developer(React)</h2>
                </div>
                <Summary/>
                <Education/>
                <MyProjects/>
            </div>
        </div>
    );
}

export default App;
