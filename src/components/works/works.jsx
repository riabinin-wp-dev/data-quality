import WorksItem from '../worksItem/WorksItem';
import './works.css';
import { workList } from '../helpers/workList'; 
import AnimatedPathSecond from '../animatedPath2/AnamatedPath2';


const Works = (props) => {
    const path = "M153 0.88623H993C1001.84 0.88623 1009 8.04967 1009 16.8862V320.847C1009 329.684 1001.84 336.847 993 336.847H17C8.16344 336.847 1 344.011 1 352.847V656.553C1 665.39 8.16344 672.553 17 672.553H521";
    return (
        <section className="section works">
            <div className="container">
                <h2 className="project_title mb80">Как мы работаем</h2>
                <div className="grid-row">
                    {workList.map((list,index) =>{
                        return  <WorksItem key={index} title={list.title} img={list.img} description={list.description} />
                    })}
                    <svg width="1010" height="674" viewBox="0 0 1010 674" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <AnimatedPathSecond path={path} />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Works;