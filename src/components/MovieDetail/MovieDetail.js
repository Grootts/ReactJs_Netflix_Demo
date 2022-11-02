import React from 'react';
import styled, { keyframes } from 'styled-components';
const showModal=false;
function MovieDetail(props) {
    return (
        <MovieDetailModal>
            <div className={`backdrop ${showModal?'showBackdrop':'hideBackdrop'}`}></div>
            <div className={`modal ${showModal?'showBackdrop':'hideBackdrop'}`}
            style={{backgroundImage:`url(https://tse3.mm.bing.net/th?id=OIP.jy7GfGXAtYm9C6D-ujxcuAHaDS&pid=Api&P=0)`,
            backgroundSize:'cover'
        }}
            >
                <div className='container'>
                    <div className='movieInfo'>
                        <h1 className='movieTitle'>sdsd</h1>
                        <p className='statistical'>
                            <span className='rating'>dsdsd</span>
                            <span className='popularity'>dsdsds</span>
                        </p>
                        <p className='releaseDate'>sdsdsdsd</p>
                        <p className='runtime'>sdsd</p>
                        <p className='overview'>dsdsdsd</p>
                    </div>
                </div>
            </div>
        </MovieDetailModal>
    );
}
const fadeIn=keyframes`
0%:{background:rgba(0,0,0,0)};
100%:{background:rgba(0,0,0,0.6)}
`
const MovieDetailModal=styled.div`
.backdrop{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:200;
    background-color:rgba(0,0,0,0.6);
animation:${fadeIn} 1s cubic-bezier(0.17,0.85,0.45,1) forwards;

}
.showBackdrop{
    display:block;
}
.hideBackdrop{
    display:none;
}
.modal{
    position:fixed;
    top:25%;
    left:0;
    z-index:300;
    height:80%;
    width:100%;
    margin:0 auto;
    color:white;
    box-shadow:0 15px 40px rgba(255,255,255,0.2);

}
.container{
    position:fixed;
    width:70%;
    height:100%;
    background: linear-gradient(90deg,rgba(0,0,0,0.94),60%,transparent);
    @media screen and (max-width:1184px){
        background: linear-gradient(90deg,rgba(0,0,0,0.95),40%,transparent);
        width:88%;
    }
    @media screen and (max-width:900px){
        background: linear-gradient(90deg,rgba(0,0,0,0.95),50%,transparent);
        width:100%;
    }
    @media screen and (max-width:600px){
        background: linear-gradient(90deg,rgba(0,0,0,0.95),60%,transparent);
        
    }
    .movieInfo{
        width:65%;
        height:100%;
        padding-left:24px;
        color:white;
        font-size:20px;
        padding-tp:30px;
    }
    .movieTitle{
        margin-top:30px;
    }
    .statistical{
        margin-top:20px;
        display:flex;
    }
}
`
export default MovieDetail;