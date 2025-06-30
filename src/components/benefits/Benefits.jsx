import React, { useState, useEffect } from 'react';
import './benefits.scss';
import vector from './images/Vector.svg';

const Benefits = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 576);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="section benefits">
            <div className="container">
                <div className="benefits_inner">
                    {isMobile && (
                        <div className="benefits_inner_item --mobile">
                            <h2 className="project_title">Наши преимущества</h2>
                        </div>
                    )}
                    <div className="benefits_inner_item --desktop">
                        <h2 className="project_title --desktop">Наши преимущества</h2>
                        <img src={vector} className='benefits_inner_item_img' alt="vektor" width={365} height={633} />
                    </div>
                    <div className="benefits_inner_item">
                        <ul className="beneefits_item_list list-reset">
                            <li>
                                <div className="content_wrapper">
                                    <h3 className='beneefits_item_list_title'>Обучаем исполнителя проводить проверку</h3>
                                    <p>в соответствии с вашими требованиями</p>
                                </div>
                            </li>

                            <li>
                                <div className="content_wrapper">
                                    <h3 className='beneefits_item_list_title'>Работаем не только из офиса,</h3>
                                    <p>но и удалённо</p>
                                </div>
                            </li>

                            <li>
                                <div className="content_wrapper">
                                    <h3 className='beneefits_item_list_title'>Точно подбираем каждого исполнителя</h3>
                                    <p>под ваш запрос</p>
                                </div>
                            </li>

                        </ul>
                        <ul className="beneefits_item_list list-reset">
                            <li>
                                <div className="content_wrapper">
                                    <h3 className='beneefits_item_list_title'>Предоставляем отчёты о проверках</h3>
                                    <p>и рекомендации по улучшению</p>
                                </div>
                            </li>
                            <li>
                                <div className="content_wrapper">
                                    <h3 className='beneefits_item_list_title'>Используем искусственный интеллект</h3>
                                    <p>для оптимизации проверок</p>
                                </div>
                            </li>
                            <li>
                                <div className="content_wrapper">
                                    <h3 className='beneefits_item_list_title'>Проводим проверки в различных часовых</h3>
                                    <p>поясах и регионах России и СНГ</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;