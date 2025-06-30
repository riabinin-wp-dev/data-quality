import './casesSlides.scss';

const CasesSlides = (props) => {
    return ( 
        <div className="slide grid-row cases_slide">
            <div className="case_slide_item">
                <h3 className="case_slide_item_title">{props.title}</h3>
                <div className="case_slide_item_desc" dangerouslySetInnerHTML={{ __html: props.description }} />
            </div>
            <div className="case_slide_item">
                <img src={props.img} alt={props.title} width={313} height={338} loading="lazy" />
            </div>
            <ul className="case_slide_item list-reset">
                <li>
                    <span className="case_slide_item_weight">Объём:</span>
                    <dl className="h-reset">
                        <dt>{props.weightNumeric}</dt>
                        <dd className="h-reset">{props.weightText}</dd>
                    </dl>
                </li>
                <li>
                    <span className="case_slide_item_industry">Индустрия</span>
                    <small>{props.industry}</small>
                </li>
            </ul>
        </div>
     );
}
 
export default CasesSlides;