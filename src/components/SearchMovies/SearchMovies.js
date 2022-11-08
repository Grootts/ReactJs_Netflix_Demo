import React from 'react';
import styled from 'styled-components';
import { useViewPort } from '../hooks';
const moviesList=[
    "https://tse1.mm.bing.net/th?id=OIP.Wds-PDrIxUDUi7Qu9jA-WQHaE1&pid=Api&P=0",
    "https://tse1.mm.bing.net/th?id=OIP.Wds-PDrIxUDUi7Qu9jA-WQHaE1&pid=Api&P=0"
]
function SearchMovies(props) {
   const[windowWithd]=useViewPort();
    return (
        <SearchPane>
         {
            moviesList&&moviesList.length>0?(
                <div className='searchContent'
                style={{
                 gridTemplateColumns:`repeat(${
                     windowWithd>1200?5:
                     windowWithd>992?4:
                     windowWithd>768?3:
                     windowWithd>600?2:1
                 },auto)`
                }}
                >
                 {
                     moviesList.map((movie,index)=>(
                         <div className='movieItem'key={index}>
                         <img src={movie} alt="" />
                         <span>Movie Name</span>
                     </div>
                     ))
                 }
                
                 </div> 
            ):(
                <div>
                    <NotFound>
                        Your search not found    
                    </NotFound>
                </div>
            )
         }
        </SearchPane>
    );
}
const SearchPane=styled.div`
    width:100%;
    min-height:92vh;
    padding-top:80px;
    transition:all 0.3s linear;
    background:var(--color-background);
    .searchContent{
        padding:40px 60px;
        display:grid;
        gap:8px;
       &:hover .movieItem{
        opacity:0.7;
       }
        .movieItem{
            position:relative;
            max-width:400px;
            width:100%;
            height:200px;
            border-radius:12px;
            margin:20px 0;
            overflow:hidden;
            transform:scale(1);
            trasition:all 0.3s linear;
            &:hover {
                transform:scale(1.2);
                z-index:10;
                opacity:1;

            }
            img{
                width:100%;
                height:100%;
                object-fit:cover;
            }
            span{
                position:absolute;
                left:0;
                right:0;
                bottom:0;
                text-align:center;
                padding:4px;
                background:rgba(0,0,0,0.5);
                color:white;

            }

        }
    }

`
const NotFound=styled.div`
color:white;
 padding:10rem;
 text-size:20px;
 text-align:center;
`
export default SearchMovies;