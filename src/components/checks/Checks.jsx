import './checks.scss';
import Map from '../map/map';
import cities from '../helpers/cities';

const Checks = (props) => {
    return (
        <section className="section map">
            <div className="container">
                <h2 className="project_title">Проводим проверки <br /> в  85 городах РФ</h2>
                <div className="img-wrap">
                    <Map />
                </div>
            </div>
            <div className="container">
                <div className="map_cities">
                    <div className="map_cities_search">
                        <h3 className="map_cities_title">Найдите свой город в списке</h3>
                        <form action="" id='cities_search'>
                            <input type="text" className='project_input' name="city" id="city_input" placeholder='Введите название города' />
                            <button type="submit">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 19.0586L15.8309 14.8895C16.9139 13.565 17.4463 11.8749 17.3181 10.1688C17.19 8.46274 16.4109 6.8712 15.1422 5.72339C13.8735 4.57558 12.2121 3.95932 10.5018 4.00209C8.79141 4.04485 7.16292 4.74336 5.95314 5.95314C4.74336 7.16292 4.04485 8.79141 4.00209 10.5018C3.95932 12.2121 4.57558 13.8735 5.72339 15.1422C6.8712 16.4109 8.46274 17.19 10.1688 17.3181C11.8749 17.4463 13.565 16.9139 14.8895 15.8309L19.0586 20L20 19.0586ZM10.6791 16.0053C9.62567 16.0053 8.5959 15.6929 7.72 15.1077C6.84411 14.5224 6.16143 13.6906 5.7583 12.7174C5.35517 11.7441 5.2497 10.6732 5.45521 9.64C5.66072 8.60681 6.168 7.65777 6.91288 6.91288C7.65777 6.168 8.60681 5.66072 9.64 5.45521C10.6732 5.2497 11.7441 5.35517 12.7174 5.7583C13.6906 6.16143 14.5224 6.84411 15.1077 7.72C15.6929 8.5959 16.0053 9.62567 16.0053 10.6791C16.0037 12.0912 15.4421 13.445 14.4436 14.4436C13.445 15.4421 12.0912 16.0037 10.6791 16.0053Z" fill="#3C484F" />
                                </svg>
                            </button>
                        </form>
                        <div className="map_cities_info">
                            <p>Какой‑то рекламный текст о том какие мы крутые, охватываем много городов и может ещё что‑то для информации. </p>
                            <p>Или ещё как вариант, сделать блок с текстом «Нет вашего города? Оставьте заявку в наш отдел по развитию.</p>
                        </div>
                    </div>
                    <div className="map_cities_names">
                        <ul className="list-reset">
                            {cities.map((city,index) => {
                                return (
                                    <li key={index}><a href={city.slug}>{city.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Checks;