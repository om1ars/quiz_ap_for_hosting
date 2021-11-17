import React from "react";
import { useSelector } from "react-redux";
import HomeFirst from "../../components/homecomponents/HomeFirst";
import HomeSecond from "../../components/homecomponents/HomeSecond";
import First from "../../components/loginComponents/first/First";
import { selectUser } from "../../features/UserSlice";
import Login from "../login/LoginPage";


export default function HomePage() {
  return (
    <div>
      <First />
      <HomeSecond />
    </div>
  );
}
