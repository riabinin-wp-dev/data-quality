import {sferaList} from '../helpers/sferaList';
import SferaItem from '../sferaItem/SferaItem';
import './sfera.scss';

const Sfera = () => {
    return ( 
        <section className="section sfera">
            <div className="container">
                <h2 className="project_title">Отрасли, в которых <br /> мы работаем</h2>
                <div className="grid-row">
            {sferaList.map((list,index)=>{
                return <SferaItem key={index} title={list.title} img={list.img} link={list.link} />
            })}
                </div>
            </div>
        </section>
     );
}
 
export default Sfera;