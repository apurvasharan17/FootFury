import React from "react";
import "../../Components/Navbar/Navbar.css";
import "../../Components/NavbarMblView/NavbarMblView.css";
import { Categories } from "../../Components/Index";
import { BsCart2, BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useUser } from "../../Context/index";

export const NavbarMblView = () => {
  const { user, isUserLoggedIn, setSearchInput } = useUser();
  const { cart, wishlist } = user;
  const sum = (acc, curr) => (acc = acc + curr.qty);
  const cartCount = cart && cart.reduce(sum, 0);

  return (
    <div className="navabar-mbl-view">
      <div className="free-shipping-msg">
        FREE SHIPPING FOR ORDERS Rs.2000+. GIFTED APU20 COUPONS WITH PURCHASES
        Rs.2500+.
      </div>

      <nav
        className="nav-ecom-mbl-view
      flex nav-ecom-mbl-view"
      >
        <div className="flex list">
          <Link to="/">
            <img
              src="./assets/FootFuryLogo.png"
              alt="logo"
              className="logo-ecom"
            />
          </Link>
        </div>

        <ul className="navbar-second-part flex list">
          <li className="">
            <Link to="/login">
              <BsPerson size={28} color={"var(--black-color)"} />
            </Link>
          </li>
          <li className="">
            <Link to="/wishlist-page">
              <button className="badge-on-icon ">
                <BsHeart className="icon-size icon-hover" />
                {isUserLoggedIn && wishlist && wishlist.length > 0 && (
                  <div className="badge-on-icon-notify flex-row-center">
                    <span>{wishlist.length}</span>
                  </div>
                )}
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/cart-page">
              <button className="badge-on-icon">
                <BsCart2 className="icon-badge icon-size icon-hover" />
                {cartCount > 0 && isUserLoggedIn && (
                  <div className="badge-on-icon-notify flex-row-center">
                    <span>{cartCount}</span>
                  </div>
                )}
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="category-desktop-view">
        <Categories />
      </div>
      <div className="brand-search-container">
        <input
          type="text"
          className="brand-search-input"
          placeholder="Search for Items"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <BsSearch size={21} />
      </div>
    </div>
  );
};
