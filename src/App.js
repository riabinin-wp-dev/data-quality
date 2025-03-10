import Header from './components/header/Header';
import './styles/settings.css';
import './styles/fonts.css';
import './styles/vars.css';
import Intro from './components/intro/Intro';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import Benefits from './components/benefits/Benefits';
import Map from './components/map/Map';

function App(){
    return(
        <div className="App">
            <Header></Header>
            <Intro></Intro>
            <Banner></Banner>
            <Services></Services>
            <Benefits></Benefits>
            <Map></Map>
        </div>
    );
}

export default App;
