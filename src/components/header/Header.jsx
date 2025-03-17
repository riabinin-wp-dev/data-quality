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
                            <li className='menu-item-has-children'><a href="!#">Наши услуги</a></li>
                            <li><a href="!#">Отрасли</a></li>
                            <li><a href="!#">Кейсы</a></li>
                            <li><a href="!#">Карьера</a></li>
                            <li><a href="!#">О нас</a></li>
                        </ul>
                    </nav>
                    <div className="header_services">
                        <button type='button' className="btn-reset accent_button">Заказать услугу</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;