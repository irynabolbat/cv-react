import React, {useEffect, useState} from 'react';
import style from './Summary.module.css'

const Summary = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);
    return (
        <div className={!scroll ? style.summary_wrapper : `${style.summary_wrapper} ${style.active}`}>
            <h3 className={style.summary_header}>Summary</h3>
            <div className={style.summary_text}>
                <span>I'm a responsible person who like to complete all tasks on time.
                    Communication is my strong side, so I can find a common language with colleagues
                    and customers. Beside that I'm a punctual and don’t like to be late.
                </span>
            </div>
        </div>
    );
};

export default Summary;