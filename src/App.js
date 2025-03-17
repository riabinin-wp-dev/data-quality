import Header from './components/header/Header';
import './styles/settings.scss';
import './styles/fonts.css';
import './styles/vars.scss';
import './styles/breakpoint.scss';
import Intro from './components/intro/Intro';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import Benefits from './components/benefits/Benefits';
import Works from './components/works/works';
import Sfera from './components/sfera/Sfera';
import Cases from './components/cases/Cases';
import Questions from './components/questions/Questions';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import Checks from './components/checks/Checks';

function App(){
    return(
        <div className="App">
            <Header />
            <Intro />
            <Banner />
            <Services />
            <Benefits />
            <Checks />
            <Works />
            <Sfera />
            <Cases />
            <Questions />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
