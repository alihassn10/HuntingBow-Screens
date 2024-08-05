import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import styled from "styled-components";
import Submenu from "./Submenu";

const NavbarNavigation = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const linkText = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(linkText, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <NavContainer onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <button className="link-btn" >
              home
            </button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>
              bows
            </button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>
              arrows
            </button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>
              bow accessories
            </button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>cross bows</button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>bolts</button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>X-bow accessories</button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>misc</button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>optics</button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>target</button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>decoy</button>
          </li>
          <li>
            <button className=" link-btn" onMouseEnter={displaySubmenu}>hunting</button>
          </li>
        </ul>
        <button className="btn signin-btn">Login</button>
      </div>
      <Submenu />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 3rem;
  display: flex;
  align-items: center;
  //   justify-content: center;
  background: white;
  position: relative;
  z-index: 1;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius);
    border-color: transparent;
    color: black;
    // background: var(--clr-black);
    cursor: pointer;
    transition: var(--transition);
    margin-left: 10rem;
  }
  .btn:hover {
    background: var(--clr-grey-5);
  }
  .nav-links {
    display: none;
  }
  .signin-btn {
    display: none;
  }

  /* nav media query */
  @media screen and (min-width: 800px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
    .signin-btn {
      display: inline-block;
    }
    .nav-links {
      display: flex; /* Change the display property to flex */
      justify-content: center; /* Align the links horizontally at the center */
      align-items: center; /* Align the links vertically at the center */
      list-style: none; /* Remove default list styling */
      padding: 0; /* Remove padding to remove any unwanted space */
    }
    .nav-links li {
      height: 100%;
      margin: 0; /* Remove default margin */
    }
    .link-btn {
      height: 100%;
      background: transparent;
      border-color: transparent;
      font-size: 0.9rem;
      color: black;
      text-transform: capitalize;
      letter-spacing: 1px;
      width: 6rem;
    }
  }
`;

export default NavbarNavigation;
