import './header.scss';
import logo from './images/logo.svg';

function Header() {
    return (
        <header className='header'>
            <div className="header_top">
                <div className="container">
                    <div className="header_wrapper">
                        <div className="header_wraper_city">
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00071 20L12.601 11.9072C14.7016 9.10532 14.3979 4.49988 11.9509 2.05198C10.6286 0.728674 8.87053 0 7.00071 0C5.13089 0 3.37277 0.728674 2.05054 2.05161C-0.396438 4.49952 -0.700165 9.10495 1.39198 11.8958L7.00071 20ZM7.06532 4.383C8.47444 4.383 9.62072 5.53025 9.62072 6.93975C9.62072 8.34925 8.47444 9.4965 7.06532 9.4965C5.6562 9.4965 4.50993 8.34925 4.50993 6.93975C4.50993 5.53025 5.6562 4.383 7.06532 4.383Z" fill="white" />
                            </svg>
                            <button type="button" className='header_wraper_city_curent btn-reset'>Москва</button>
                        </div>
                        <a href="tel:+74953325541" className="header_wrapper_tel">+7 495 332-55-41</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header_inner">
                    <a href="#!" className="header_logo">
                        <img src={logo} alt="logo" width={207} height={34} />
                    </a>
                    <nav>
                        <ul className="list-reset header_nav">
                            <li className='menu-item-has-children'><a href="!#">Наши услуги</a>
                                <ul className="sub-menu">
                                    <li><a href="#!">Тайный покупатель</a></li>
                                    <li><a href="#!">Мониторинг цен</a></li>
                                    <li><a href="#!">Опросы на заказ</a></li>
                                    <li><a href="#!">Конкурентная разведка</a></li>
                                </ul>
                            </li>
                            <li><a href="!#">Отрасли</a></li>
                            <li><a href="!#">Кейсы</a></li>
                            <li><a href="!#">Карьера</a></li>
                            <li><a href="!#">О нас</a></li>
                        </ul>
                    </nav>
                    <div className="header_services">
                        <button type='button' className="btn-reset accent_button">Заказать услугу</button>
                    </div>
                    <button type="button" className='header_burger'>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className="header_mobile active">
                <div className="header_mobile_inner">
                    <div className="header_mobile_top">
                        <a href="#!" className="header_logo">
                            <img src={logo} alt="logo" width={199} height={32} />
                        </a>
                        <button type="button" className='header_mobile_close' aria-label='Close menu' data-close>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08094 11.9935C1.78333 12.0108 1.49062 11.9119 1.26455 11.7175C0.818718 11.269 0.818718 10.5447 1.26455 10.0962L11.0268 0.333722C11.4905 -0.10019 12.2182 -0.0760693 12.6521 0.387644C13.0444 0.806977 13.0673 1.4515 12.7056 1.89757L2.88582 11.7175C2.66268 11.9091 2.37465 12.0078 2.08094 11.9935Z" fill="#283034" />
                                <path d="M11.832 11.9938C11.5303 11.9925 11.2413 11.8728 11.0271 11.6603L1.26477 1.89783C0.851729 1.41549 0.907884 0.689587 1.39022 0.276501C1.82072 -0.092167 2.45561 -0.092167 2.88607 0.276501L12.7059 10.039C13.1695 10.473 13.1934 11.2007 12.7594 11.6643C12.7421 11.6827 12.7243 11.7006 12.7059 11.7178C12.5869 11.8213 12.4479 11.8991 12.2976 11.9466C12.1473 11.9941 11.9888 12.0102 11.832 11.9938Z" fill="#283034" />
                            </svg>
                        </button>
                    </div>
                    <nav className="header_mobile_middle">
                        <ul className="header_mobile_menu header_nav list-reset">
                            <li className='menu-item-has-children'><a href="!#">Наши услуги</a>
                                <ul className="sub-menu">
                                    <li><a href="#!">Тайный покупатель</a></li>
                                    <li><a href="#!">Мониторинг цен</a></li>
                                    <li><a href="#!">Опросы на заказ</a></li>
                                    <li><a href="#!">Конкурентная разведка</a></li>
                                </ul>
                            </li>
                            <li><a href="!#">Отрасли</a></li>
                            <li><a href="!#">Кейсы</a></li>
                            <li><a href="!#">Карьера</a></li>
                            <li><a href="!#">О нас</a></li>
                        </ul>
                    </nav>
                    <nav className="header_mobile_bottom">
                        <ul className="list-reset header_mobile_contacts">
                            <li><a href="">hello@data-quality.com</a></li>
                            <li><a href="">Telegram</a></li>
                            <li className='--mobile'><a href="">+7 495 332-55-41</a></li>
                        </ul>
                    </nav>
                    <div className="header_mobile_order">
                        <a href='#!' className="btn-reset project_link accent_button">Заказать услугу</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;