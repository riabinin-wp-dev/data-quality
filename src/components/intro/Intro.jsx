import AnimatedPath from "../animatedPath/AnimatedPath";
import './intro.css';

const Intro = () => {
    const path = "M0 1.00001L56 1.00001C64.8366 1.00001 72 8.16345 72 17L72 103C72 111.837 79.1634 119 88 119L238 119C246.837 119 254 126.163 254 135L254 218C254 226.837 261.163 234 270 234L932 234C940.837 234 948 241.163 948 250L948 262C948 270.837 955.163 278 964 278L1003 278C1011.84 278 1019 285.163 1019 294L1019 298.5C1019 307.337 1026.16 314.5 1035 314.5L1074 314.5C1082.84 314.5 1090 307.337 1090 298.5L1090 135C1090 126.163 1097.16 119 1106 119L1194 119C1202.84 119 1210 111.837 1210 103L1210 28.5C1210 19.6635 1217.16 12.5 1226 12.5L1297.5 12.5";

    return (
        <section className="section intro">
            <div className="container">
                <div className="intro_inner">
                    <h1 className="project_title_h1 mb40">Тайные проверки <br /> по регионам РФ и СНГ</h1>
                    <p className="project_description mb60">Вы можете заказать услугу по проверке тайным покупателем по нескольким схемам в зависимости от ваших потребностей. Отчёт тайного покупателя мы предоставляем в виде аудиозаписи посещения и чек-листа с комментариями и оценками.</p>
                    <a href="#!" className="project_link accent_button mt60">Заказать услугу</a>
                    <div className="intro_diagramm">
                        <ul className="list-reset">
                            <li>
                                <dl className="h-reset">
                                    <dt>10 <span>индустрий</span></dt>
                                    <dd className="h-reset">тайных проверок</dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="h-reset">
                                    <dt>85</dt>
                                    <dd className="h-reset">городов</dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="h-reset">
                                    <dt>100+</dt>
                                    <dd className="h-reset">тайных покупателей</dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="h-reset">
                                    <dt>5000+</dt>
                                    <dd className="h-reset">проверок ежемесячно</dd>
                                </dl>
                            </li>
                        </ul>
                        <svg width="1298" height="315" viewBox="0 0 1298 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <AnimatedPath path={path} />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;