import WorksItem from '../worksItem/WorksItem';
import './works.scss';
import { workList } from '../helpers/workList';
import AnimatedPathSecond from '../animatedPath2/AnamatedPath2';


const Works = (props) => {
    const path = "M209 0.5V89.8862C209 98.7228 216.163 105.886 225 105.886H1119C1127.84 105.886 1135 113.05 1135 121.886V273.867V341.857C1135 350.693 1142.16 357.857 1151 357.857H1246C1254.84 357.857 1262 365.02 1262 373.857V425.847C1262 434.684 1254.84 441.847 1246 441.847H1135H143C134.163 441.847 127 449.011 127 457.847V609.7V677.627C127 686.463 119.837 693.627 111 693.627H16.5C7.66344 693.627 0.5 700.79 0.5 709.627V761.553C0.5 770.39 7.66344 777.553 16.5 777.553H127H681C689.837 777.553 697 784.716 697 793.553V890";
    return (
        <section className="section works">
            <div className="container">
                <h2 className="project_title mb80">Как мы работаем</h2>
                <div className="grid-row">
                    {workList.map((list, index) => {
                        return <WorksItem key={index} title={list.title} img={list.img} description={list.description} />
                    })}
                    <svg width="1263" height="890" viewBox="0 0 1263 890" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <AnimatedPathSecond path={path} />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Works;