import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/chat"> 프로필 </Link>
      <Link to="/"> 메인 </Link>
      <Link to="/chat"> 채팅 </Link>
    </>
  );
}

export default Header;
