import React, { useRef, useEffect, useState } from 'react';
import './services.scss';
import logo1 from './services/photo-camera 1.png';
import logo2 from './services/photo-camera 2.png';
import logo3 from './services/photo-camera 3.png';
import logo4 from './services/photo-camera 4.png';

const Services = () => {
    const containerRef = useRef(null);
    const thumbRef = useRef(null);
    const [thumbPosition, setThumbPosition] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        const thumb = thumbRef.current;

        // Проверяем, существует ли контейнер
        if (!container || !thumb) return;

        const updateThumbPosition = () => {
            const scrollWidth = container.scrollWidth - container.clientWidth;
            const scrollLeft = container.scrollLeft;
            const thumbMaxPosition = container.clientWidth - thumb.clientWidth;

            if (scrollWidth > 0) {
                const newPosition = (scrollLeft / scrollWidth) * thumbMaxPosition;
                setThumbPosition(newPosition);
            }
        };

        // Добавляем обработчики событий
        container.addEventListener('scroll', updateThumbPosition);
        window.addEventListener('resize', updateThumbPosition);

        // Очистка
        return () => {
            container.removeEventListener('scroll', updateThumbPosition);
            window.removeEventListener('resize', updateThumbPosition);
        };
    }, []);

    return (
        <section className="section services">
            <div className="container">
                <h2 className="project_title">Наши услуги</h2>
                <div className="services_container" ref={containerRef}>
                    <ul className="services_list list-reset">
                        <li>
                            <div className="img-wrap">
                                <img src={logo1} alt="logo1" width={64} height={64} />
                            </div>
                            <h3 className="services_list_title">Тайный покупатель</h3>
                            <ul className="services_list_items list-reset">
                                <li>Аудит мерчандайзинга</li>
                                <li>Торговый аудит</li>
                                <li>Аудит промоутеров</li>
                            </ul>
                            <a href="#!" className="services_inner_more accent_button project_link">Подробнее</a>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img src={logo2} alt="logo2" width={64} height={64} />
                            </div>
                            <h3 className="services_list_title">Мониторинг цен</h3>
                            <ul className="services_list_items list-reset">
                                <li>Аудит мерчандайзинга</li>
                                <li>Торговый аудит</li>
                                <li>Аудит промоутеров</li>
                            </ul>
                            <a href="#!" className="services_inner_more accent_button project_link">Подробнее</a>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img src={logo3} alt="logo3" width={64} height={64} />
                            </div>
                            <h3 className="services_list_title">Тайный покупатель</h3>
                            <ul className="services_list_items list-reset">
                                <li>Аудит мерчандайзинга</li>
                                <li>Торговый аудит</li>
                                <li>Торговый аудит</li>
                                <li>Аудит промоутеров</li>
                            </ul>
                            <a href="#!" className="services_inner_more accent_button project_link">Подробнее</a>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img src={logo4} alt="logo4" width={64} height={64} />
                            </div>
                            <h3 className="services_list_title">Тайный покупатель</h3>
                            <ul className="services_list_items list-reset">
                                <li>Аудит мерчандайзинга</li>
                                <li>Торговый аудит</li>
                                {/* <li>Аудит промоутеров</li> */}
                            </ul>
                            <a href="#!" className="services_inner_more accent_button project_link">Подробнее</a>
                        </li>
                    </ul>
                </div>
                <div className="custom_scrollbar">
                    <div
                        className="custom_scrollbar_thumb"
                        ref={thumbRef}
                        style={{ transform: `translateX(${thumbPosition}px)` }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;