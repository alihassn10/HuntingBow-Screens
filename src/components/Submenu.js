import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../Context";
import styled from "styled-components";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
    dispatch, // Assuming you have a dispatch function for state management
  } = useGlobalContext();
  const container = useRef(null);

  const handleMouseEnter = () => {
    // Set isSubmenuOpen to true when entering the submenu
    dispatch({ type: 'OPEN_SUBMENU' });
  };

  const handleMouseLeave = () => {
    // Set isSubmenuOpen to false when leaving the submenu
    dispatch({ type: 'CLOSE_SUBMENU' });
  };

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <SubmenuContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <aside
        className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
        ref={container}
      >
        <h4>{page}</h4>
        <div className={`submenu-center col-2`}>
          {links.map((link, index) => {
            const { label, url } = link;
            return (
              <a key={index} href={url}>
                {label}
              </a>
            );
          })}
        </div>
      </aside>
    </SubmenuContainer>
  );
};

const SubmenuContainer = styled.nav`
  .submenu {
    background: var(--clr-white);
    box-shadow: var(--dark-shadow);
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 1rem;
    margin-top: -4rem;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .submenu::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .submenu.show {
    display: block;
  }

  .submenu:hover .submenu-center {
    display: grid;
  }

  .submenu-center {
    display: grid;
    gap: 0.25rem 2rem;
  }

  .col-2 {
    grid-template-columns: repeat(1, 1fr);
  }

  .submenu h4 {
    margin-bottom: 1.5rem;
  }

  .submenu-center a {
    width: 10rem;
    display: block;
    color: black;
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
`;

export default Submenu;
