import React from "react";
import { useGlobalContext } from "../Context";
import styled from "styled-components";
import { Navbar, FormControl, Button } from "react-bootstrap"; // Import React Bootstrap components
import logo from "../assets/logo.svg";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { features } from "../data";

const NavbarSearch = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <NavSearchContainer onMouseOver={closeSubmenu}>
      <Navbar expand="lg" className="nav-center">
        <div className="nav-items">
          <Navbar.Brand href="#">
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <div className="search-container">
            <FormControl type="text" placeholder="Search products..." className="custom-input" />
            <Button variant="primary" className="search-btn">
              <BsSearch />
            </Button>
          </div>
          <div className="feature">
            <div className="feature-info">
              <h4>{features[0].heading}</h4>
              <p>{features[0].para}</p>
            </div>
          </div>
          <Button variant="primary" className="cart-btn">
            <BsFillCartFill />
          </Button>
        </div>
      </Navbar>
    </NavSearchContainer>
  );
};

const NavSearchContainer = styled.nav`
  height: 3rem;
  display: flex;
  align-items: center;
  background: white;
  position: relative;
  z-index: 1;
  padding: 0 9rem;

  .nav-center {
    width: 100%; /* Set width to 100% of the screen */
    max-width: var(--max-width);
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center;
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 1rem; /* Equal spacing between items */
    width: 100%; /* Expand to the width of the navbar */
    max-width: var(--max-width);
  }

  .logo {
    width: 175px;
  }

  .search-container {
    display: flex;
    align-items: center;
    background: var(--clr-grey-9);
    border-radius: var(--radius);
    flex-grow: 1; /* Allow this container to grow and fill the available space */

    .custom-input {
      border: none;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius);
      background: transparent;
      color: var(--clr-grey-5);
      outline: none;
      width: 100%; /* Fill the available width */
      margin-right: 10px; /* Add margin between input and button */
    }

    .search-btn {
      padding: 0.25rem 0.75rem;
      border-radius: var(--radius);
      border-color: transparent;
      color: white;
      background: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
    }

    .search-btn:hover {
      background: var(--clr-primary-7);
    }
  }

  .feature {
    display: flex;
    align-items: center;
    // padding: 1rem;
    border-radius: 8px;
    // background-color: var(--clr-grey-9);
    width: 300px; /* Adjust the width as needed */

    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0;
    }

    p {
      font-size: 1rem;
      margin: 0;
      color: #555;
    }
  }

  .cart-btn {
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    border-color: transparent;
    color: white;
    background: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
  }

  .cart-btn:hover {
    background: var(--clr-primary-7);
  }

  @media screen and (max-width: 800px) {
    .nav-items {
      flex-direction: column; /* Stack items vertically on mobile */
      align-items: center;
      margin-top: 1rem; /* Add some spacing between stacked items */
    }
  }
`;

export default NavbarSearch;
