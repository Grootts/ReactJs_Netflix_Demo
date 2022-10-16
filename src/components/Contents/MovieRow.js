import styled from "styled-components";
import{AiOutlineCaretLeft,AiOutlineCaretRight} from "react-icons/ai"
import { useRef } from "react";
import { SmoothHorizontalScrolling } from "../../utils";
import { useViewPort } from "../hooks";
function MovieRow(props){
    const{movies,title,isNetflix}=props;
    const sliderRef=useRef();
    const movieRef=useRef();
    const[windowWidth]=useViewPort();
    const handleScrollRight=()=>{
        const maxScrollLeft=sliderRef.current.scrollWidth-sliderRef.current.clientWidth;
        console.log(maxScrollLeft);
        if(sliderRef.current.scrollLeft<maxScrollLeft){
            SmoothHorizontalScrolling(sliderRef.current,250,movieRef.current.clientWidth*2,sliderRef.current.scrollLeft)
        };
    }
    const handleScrollLeft=()=>{
      
        if(sliderRef.current.scrollLeft>0){
            SmoothHorizontalScrolling(sliderRef.current,250,-movieRef.current.clientWidth*2,sliderRef.current.scrollLeft)
        };
    }
    return(
        //draggble de keo ca cum
        <MovieRowContainer draggable='false'>
            <h1 className="heading">{title}</h1>
            <MovieSlider ref={sliderRef} draggable='true'
            style={
                movies&&movies.length>0
                ?{gridTemplateColumns:`repeat(${movies.length},
                    ${windowWidth>1200?'360px'
                :windowWidth>992?'300px'
                :windowWidth>762?'250px':'200px'}
                )`
            }
                :{}
            }
            >

                {movies &&movies.length>0 &&movies.map((movie,index)=>{
                    if(movie.poster_path&&movie.backdrop_path !==null){
                        let imageUrl=isNetflix
                        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                        return(
                            <div key={index} className="movieItem" ref={movieRef} draggable='false'>
                            <img  src={imageUrl} alt="" draggable='false'/>
                            <div className="movieName">{movie.title||movie.name}</div>
                        </div>
                        )
                    }
                })}
                
            </MovieSlider>
            
          <div className={`btnLeft ${isNetflix &&'isNetflix'}`} onClick={handleScrollLeft}>
          <AiOutlineCaretLeft/>
            </div>
            <div className={`btnRight ${isNetflix &&'isNetflix'}`} onClick={handleScrollRight}>
                <AiOutlineCaretRight/>
            </div>
        </MovieRowContainer>
    );
}
export default MovieRow;
const MovieRowContainer=styled.div`
background-color:black;
color:white;
padding-top:20px;
padding-right:20px;
padding-left:20px;
position:relative;
width:100%;
height:100%;

.heading{
font-size:18px;
user-select:none;

}
.btnLeft{
    position:absolute;
    top:50%;
    left:30px;
    z-index:20;
    cursor:pointer;
    transform-origin:center;
    height:50px;
    width:40px;
    background-color:rgba(0,0,0,0.66);
    border-radius:4px;
    display:flex;
    align-items:center;
    transform:translateY(-20%);
    &:hover{
        background-color:rgba(0,0,0,0.8);
    }
    //svg la icons
    &:hover svg{
opacity:1;
transform:scale(1.1);

    }
    svg{
        opacity:0.8;
        font-size:50px;
        transition:all 0.3s linear;
    }
    //neu btnLeft co isNetflix thi se set lai gia tri
    &.isNetflix{
        height:100px;
        width:max-content;
    }
}
    .btnRight{
        position:absolute;
        top:50%;
        right:30px;
        z-index:20;
        cursor:pointer;
        transform-origin:center;
        height:50px;
        width:40px;
        background-color:rgba(0,0,0,0.66);
        border-radius:4px;
        display:flex;
        align-items:center;
        transform:translateY(-20%);
        &:hover{
            background-color:rgba(0,0,0,0.8);
        }
        //svg la icons
        &:hover svg{
    opacity:1;
    transform:scale(1.1);
    
        }
        svg{
            opacity:0.8;
            font-size:50px;
            transition:all 0.3s linear;
        }
        //neu btnRight co isNetflix thi se set lai gia tri
        &.isNetflix{
            height:100px;
            width:max-content;
        }  
    }
`;
const MovieSlider=styled.div`
display:grid;
//Khoang cach giua cac slide
gap:7px;
transition:all 0.3s linear;
//Bo cac phan tu vao hang ngang

user-select:none;
overflow-y:hidden;
overflow-x:auto;
overflow:hidden;
padding-top:28px;
padding-bottom:28px;
//luc cuon se muot hon
scroll-behavior:smooth;
}
//cac the ko dc hover se mo di (opacity:0.5)
&:hover .movieItem{
    opacity:0.5;
}

.movieItem{
transform:scale(1);
max-width:400px;
max-height:500px;
width:100%;
height:100%;
transition: all 0.3s linear;
user-select:none;
overflow:hinden;
border-radius:10px;
transform:center left;
poisition:relative;
&:hover{
    //cac the hover se sang len(opacity:1>0.5)
    opacity:1;
    transform:scale(1.1);
    z-index:10;
}
img{
    height:100%;
    width:100%;
    
         
object-fit:cover;   
}
}
.movieName{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    padding:4px;
    text-align:center;
    font-size:14px;
   
    background-color:rgba(0,0,0,0.66);
}

}

`;