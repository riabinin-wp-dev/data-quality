import logo from './images/Logo.svg';
import dataQuality from './images/Data-Quality.svg';
import './footer.scss';

const Footer = () => {

        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth', // Добавляет плавность прокрутке
          });
        };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_inner">
                    <div className="footer_inner_top">
                        <div className="footer_inner_item">
                            <a href="#!" className="footer_logo">
                                <img src={logo} alt="logo" width={296} height={32} loading='lazy' />
                            </a>

                        </div>
                        <nav className="footer_menu">
                            <ul className="list-reset footer_menu_list">
                                <li className='footer_menu_title'><a href="#!">Меню</a></li>
                                <li><a href="#!">Наши услуги</a></li>
                                <li><a href="#!">Отрасли</a></li>
                                <li><a href="#!">Кейсы</a></li>
                                <li><a href="#!">Карьера</a></li>
                                <li><a href="#!">О нас</a></li>
                            </ul>
                        </nav>
                        <nav className="footer_menu">
                            <ul className="list-reset footer_menu_list">
                                <li className='footer_menu_title'><a href="#!">Доп. информация</a></li>
                                <li><a href="#!">Документация</a></li>
                                <li><a href="#!">Документация</a></li>
                                <li><a href="#!">Документация</a></li>
                                <li><a href="#!">Документация</a></li>
                                <li><a href="#!">Документация</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer_inner_medium">
                        <div className="flex-row">
                            <nav>
                                <ul className="list-reset footer_menu_info">
                                    <li><a href="#!">Юридический адрес</a></li>
                                    <li><a href="#!">ИНН 9714047836</a></li>
                                    <li><a href="#!">Политика конфиденциальности</a></li>
                                </ul>
                            </nav>
                            <nav>
                                <ul className="list-reset footer_menu_social">
                                    <li><a href="">+7 999 999-99-99</a></li>
                                    <li><a href="">hello@data-quality.com</a></li>
                                    <li><a href="">Telegram</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="img-wrap">
                        <img src={dataQuality} alt="DataQuality" width={1472} height={206} loading='lazy' />
                    </div>
                    <div className="footer_inner_bottom">
                        <small>© ООО «Дата Кволити», {new Date().getFullYear()}</small>
                        <button type="button" className='btn-reset button_to_top' onClick={scrollToTop}>
                            Наверх
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.92874 13.1749C8.0225 13.1749 8.11535 13.1565 8.20198 13.1206C8.28862 13.0847 8.36733 13.0321 8.43363 12.9658C8.49993 12.8995 8.55252 12.8208 8.58839 12.7342C8.62425 12.6476 8.6427 12.5547 8.64267 12.461L8.64261 1.02186C8.6443 0.92711 8.6271 0.832968 8.59202 0.744932C8.55694 0.656895 8.50468 0.576727 8.43828 0.509104C8.37189 0.441481 8.29269 0.387759 8.20531 0.351072C8.11793 0.314384 8.02412 0.295466 7.92935 0.295421C7.83458 0.295375 7.74075 0.314204 7.65334 0.350808C7.56593 0.387413 7.48668 0.441061 7.42022 0.50862C7.35376 0.576179 7.30142 0.656297 7.26626 0.7443C7.2311 0.832303 7.21381 0.926427 7.21541 1.02118L7.21547 12.4603C7.21559 12.6494 7.29078 12.8308 7.42452 12.9645C7.55825 13.0982 7.73961 13.1734 7.92874 13.1735L7.92874 13.1749Z" fill="white" />
                                <path d="M14.4891 7.58196C14.623 7.44811 14.6982 7.26658 14.6982 7.07729C14.6982 6.88801 14.623 6.70647 14.4891 6.57263L8.43312 0.516609C8.29928 0.382763 8.11774 0.307567 7.92846 0.307566C7.73917 0.307565 7.55764 0.382759 7.42379 0.516603L1.36784 6.57256C1.23399 6.7064 1.1588 6.88794 1.1588 7.07722C1.1588 7.26651 1.234 7.44805 1.36784 7.58189C1.50169 7.71574 1.68322 7.79093 1.87251 7.79093C2.06179 7.79093 2.24333 7.71574 2.37717 7.5819L7.92847 2.0306L13.4798 7.58195C13.6137 7.7158 13.7952 7.79099 13.9845 7.791C14.1738 7.791 14.3553 7.7158 14.4891 7.58196Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;