import './header.css';
import logo from './images/logo.svg';

function Header() {
    return(
        <header className='header'>
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
                        <a href="tel:+74953325541" className="header_services_tel">+7 495 332-55-41</a>
                        <button type='button' className="btn-reset accent_button">Заказать услугу</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;