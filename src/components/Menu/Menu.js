import{AiFillHome,AiFillStar} from 'react-icons/ai'
import{FaHotjar} from 'react-icons/fa'
import{GiNinjaHeroicStance,GiStarStruck,GiStarSwirl} from 'react-icons/gi'
import styled from 'styled-components';
import MenuItem from './MenuItem';
function Menu(props){
return(
    <MenuPane>
        <MenuItem name="Home" Icon={AiFillHome}/>
        <MenuItem name="Trending" Icon={FaHotjar}/>
        <MenuItem name="Top Rated" Icon={AiFillStar}/>
        <MenuItem name="Action Movie" Icon={GiNinjaHeroicStance}/>
        <MenuItem name="Comedy Movie" Icon={GiStarStruck}/>
        <MenuItem name="Romance Movie" Icon={GiStarSwirl}/>
       
    </MenuPane>
);
}
export default Menu;
const MenuPane=styled.div`
//giu nguyen vi tri khi cuon
position:fixed;
left:0;
top:20%;
width:46px;
padding:4px 0;
background:rgba(0,0,0,0.4);
z-index:100;
display:flex;
flex-direction:column;
transform-origin:left center;
transition:all 0.3s linear;
//bien mat chu o ngoai width
overflow:hidden;
//chi chuot vao chieu rong thay doi, chu hien len lai
&:hover{
    width:180px;
    background:background:rgba(0,0,0,0.6);

}
.subMenu{
    display:flex;
    align-items:center;
    width:max-content;
    margin-left:2px;
    padding: 4px 6px;
    cursor:pointer;
    user-select:none;
.icon{
    font-size:30px;
    margin-right:8px;

}
span{
    font-size:16px;
    font-weight:400;
    color:rgba(255,255,255,0.6);
    &:hover{
        color:#fff;
    }

}
}
`