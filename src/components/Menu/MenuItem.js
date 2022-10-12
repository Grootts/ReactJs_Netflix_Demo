import { randomColor } from "../../utils";

function MenuItem(props){
    const{name,Icon}=props;
    return(
        <div className='subMenu'>
            <Icon className="icon" style={{color:randomColor(1)}}/>
            <span>{name}</span>
        </div>
    );
}
export default MenuItem;