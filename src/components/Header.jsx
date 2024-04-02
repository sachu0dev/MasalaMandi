import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
const loggedInUser = () => {
  return false;
};

export const Title = () => {
  return (
    <a href="/" className="logo text-xl">
      Butter & Nan
    </a>
  );
};

export const Header = () => {


  // selector
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className=" header flex bg-light-black text-light-cream justify-between items-center px-[10vw] py-4 shadow-light-green shadow-sm ">
      <Title />
      <div className="nav-items">
        <ul className="flex gap-12  text-md">
          <Link to="/">
            <li>Restaurants</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/cart">
            <li className="relative">Cart</li>
          </Link>

        </ul>
      </div>
    </div>
  );
};
