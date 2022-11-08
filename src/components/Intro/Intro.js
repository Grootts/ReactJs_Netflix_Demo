import ReactPlayer from "react-player";
import { ImVolumeMute2, ImVolumeMute } from "react-icons/im";
import styled from "styled-components";
import { useState } from "react";

function Intro(props) {
  const [volumeMuted, setVolumeMuted] = useState(false);
  return (
    <IntroContainer>
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={volumeMuted}
        url="https://vimeo.com/623479718"
        className="videoIntro"
      />

      <div className="introIntro">
        <h1 className="headingIntro">Netflix Elite</h1>
        <p className="overViewIntro">
          Watch it in 1080p/720p! This is an 4 hour IC collab with my friend Eva
          (Qubii) . We hope you enjoy it{" "}
        </p>
      </div>
      {volumeMuted ? (
        <ImVolumeMute2
          className="btnVolume"
          onClick={() => setVolumeMuted((prev) => !prev)}
        />
      ) : (
        <ImVolumeMute
          className="btnVolume"
          onClick={() => setVolumeMuted((prev) => !prev)}
        />
      )}
    </IntroContainer>
  );
}
export default Intro;

const IntroContainer = styled.div`
position:relative;
color: var(--color-white);
padding-top 56%;
background-color:var(--color-background);
.videoIntro{
position:absolute;
top:0;
left:0;
user-select:none;
}
.introIntro{
    position:absolute;
    top:140px;
    left:30px;
    @media screen and (max-width:800px){
        top:120px;
        left:25px;
    }
    @media screen and (max-width:600px){
        top:100px;
        left:15px;
    }
.headingIntro{
    font-size:60px;
    transition: all 0.3s ease;
    @media screen and (max-width:800px){
        font-size:40px;
    }
    @media screen and (max-width:600px){

        font-size:25px;
    }
    
}
.overViewIntro{
    max-width550px;
    width:70%;
    line-height:1;
    padding-top:25px;
    font-size:20px;
    @media screen and (max-width:800px){
        font-size:16px;
            }
    @media screen and (max-width:800px){

        font-size:14px;
            }
}
}


.btnVolume{
    position:absolute;
    height:40px;
    width:40px;
    right:10%;
    top:50%;
    cursor:pointer;
    border-radius:50%;
    padding:4px;
    color:#bbb;
    border:#fff solid 1px;
    transition:all 0.3s ease;
    transform:scale(1);
   &:hover{
    color:white;
    transform:scale(1.2);
   }
   @media screen and (max-width:800px){
    top:30px;
    left:30px;
    padding:4px;
}
@media screen and (max-width:800px){
    top:20px;
    left:20px;
    padding:1px;

}
}
`;
