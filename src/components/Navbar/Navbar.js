import NetflixLogo from "../../assets/image/netflix.png";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { useScrollY } from "../hooks/useScrollY";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [scrollY] = useScrollY();
  const [keywords, setKeyWords] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeyWords(keywords);
    keywords.length > 0
      ? navigate(`/search?keywords=${keywords.trim()}`)
      : navigate("/");
  };
  const goHome = () => {
    navigate("/");
    setKeyWords("");
  };
  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "black" }
      }
    >
      <div className="navContainer">
        <div
          className="logo"
          onClick={() => {
            goHome();
          }}
        >
          <img src={NetflixLogo} alt="" />
        </div>
        <div className="navSearch">
          <FiSearch className="iconSearch" />

          <input
            type="text"
            placeholder="input...."
            onChange={handleChangeInput}
            value={keywords}
          />
        </div>
      </div>
    </Navigation>
  );
}
export default Navbar;
const Navigation = styled.div`
  width: 100%;
  height: 80px;
  //de len truoc Intro
  z-index: 10;
  //giu nguyen khi cuon chuot
  position: fixed;
  top: 0;
  //hieu ung truot
  transition-timing-function: ease-in;
  transition: all 1s;
  user-select: none;
  .navContainer {
    //an mau backgroud
    background-color: transparent;
    display: flex;
    align-items: center;

    //don phia ben trai
    justify-content: flex-start;
    height: 100%;
    //thu nho man hinh se xuong hang
    flex-direction: row;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
    }
    .logo {
      width: 145px;
      //di chuyen chuot vao chuyen thanh ngon tay
      cursor: pointer;
      img {
        height: 80px;
        width: 100%;
      }
    }
    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;
      &:hover .iconSearch {
        color: var(--color-white);
      }
      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        //doi vi tri icon
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }
      input {
        font-size: 20px;
        border: 1px solid #fff;
        color: var(--color-white);
        width: 0;
        padding: 10px;
        background: #222;
        //hieu ung truot ve ben trai 0.5s
        transition: width 0.5s;
        //bien mat input
        opacity: 0;
        //bam vao xuat hien input
        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
