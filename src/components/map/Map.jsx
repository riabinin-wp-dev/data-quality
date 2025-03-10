import './map.css';
import map from './images/russia.svg';

const Map = () => {
    return ( 
        <section className="section map">
            <div className="container">
                <h2 className="project_title">Проводим проверки в  <br /> 85 городах РФ</h2>
                <div className="img-wrap">
                    <img src={map} alt="map" width={312} height={664} loading='lazy' />
                </div>
            </div>
        </section>
     );
}
 
export default Map;