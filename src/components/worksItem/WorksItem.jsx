import './worksItem.css';

const WorksItem = (props) => {
    return (
        <div className="works_item">
            <div className="img-wrap">
                <img src={props.img} alt={props.title} width={64} height={64} loading="lazy" />
            </div>
            <h3 className="works_item_title">{props.title}</h3>
            <p className="work_item_desc">{props.description}</p>
        </div>
    );
}

export default WorksItem;