import './banner.css';
import banner from './images/Illustration.svg';

const Banner = () => {
    return ( 
        <section className="section banner">
            <div className="container">
                <img src={banner} alt="banner" width={1312} height={495} />
            </div>
        </section>
     );
}
 
export default Banner;