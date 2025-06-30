import React, { useState } from 'react';
import Collapse from 'react-collapse';
import './questions.scss';
import { questionsList } from '../helpers/questionsList';

const Questions = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section questions">
            <div className="container">
                <h2 className="project_title">Часто задаваемые вопросы</h2>

                {questionsList.map((question, index) => {
                    return (
                        <div className='questions_acc' key={index}>
                            <div className="questions_acc_top">
                                <h3 className="question_acc_title">{question.title}</h3>

                                <button onClick={() => toggleAccordion(index)}
                                    className={activeIndex === index ? 'active' : ''} >
                                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.5056 12.1219C21.7199 11.9075 21.8403 11.6168 21.8403 11.3137C21.8403 11.0106 21.7199 10.7199 21.5056 10.5056L11.8081 0.808146C11.5938 0.593818 11.3031 0.473409 11 0.47341C10.6969 0.473409 10.4062 0.593819 10.1919 0.808146L0.494411 10.5056C0.280084 10.7199 0.159674 11.0106 0.159675 11.3137C0.159674 11.6168 0.280083 11.9075 0.494411 12.1219C0.708738 12.3362 0.999428 12.4566 1.30253 12.4566C1.60564 12.4566 1.89633 12.3362 2.11065 12.1219L11 3.23251L19.8893 12.1219C20.1037 12.3362 20.3944 12.4566 20.6975 12.4566C21.0006 12.4566 21.2913 12.3362 21.5056 12.1219Z" fill="#283034" />
                                    </svg>
                                </button>
                            </div>
                            <Collapse isOpened={activeIndex === index} springConfig={{ stiffness: 50, damping: 50 }} >
                                <div className='questions_acc_desc'>
                                    <p>{question.description}</p>
                                </div>
                            </Collapse>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Questions;