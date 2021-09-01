import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { IconButton } from "@material-ui/core";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo/Logo";
import layoutStyles from "./layout.module.css";

export default function Layout({ children }) {
  const footerRef = useRef(null);
  const navbarRef = useRef(null);
  const [contentPad, setContentPad] = useState({
    paddingTop: 60,
    paddingBottom: 200,
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevVal) => !prevVal);
  };

  // Set content padding
  useEffect(() => {
    const newFooterHeight = footerRef.current?.offsetHeight || 0;
    const newNavHeight = navbarRef.current?.offsetHeight || 0;

    return setContentPad({
      paddingTop: newNavHeight,
      paddingBottom: newFooterHeight,
    });
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newFooterHeight = footerRef.current?.offsetHeight || 0;
      const newNavHeight = navbarRef.current?.offsetHeight || 0;

      setContentPad({
        paddingTop: newNavHeight,
        paddingBottom: newFooterHeight,
      });
    };

    // eslint-disable-next-line no-undef
    window.addEventListener("resize", handleResize);

    return () => {
      // eslint-disable-next-line no-undef
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={layoutStyles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ***** Header ***** */}
      <div ref={navbarRef} className={layoutStyles.navbar}>
        <div className={layoutStyles.navbar__container}>
          <div className={layoutStyles.logo}>
            <Link href="/">
              <a>
                <Logo classes={layoutStyles["main-logo"]} />
              </a>
            </Link>
          </div>
          <nav className={layoutStyles.navbar__nav}>
            <ul
              style={{
                maxHeight: menuOpen ? 300 : 0,
                paddingBottom: menuOpen ? 20 : 0,
              }}
            >
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Sign In</a>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/cart">
            <a>
              <IconButton className={layoutStyles.cart_btn}>
                <ShoppingBasketOutlinedIcon />
              </IconButton>
            </a>
          </Link>
          <IconButton onClick={handleMenu} className={layoutStyles.menu_btn}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>

      {/* ***** Body ***** */}
      <div className={layoutStyles.content} style={contentPad}>
        {children}
      </div>

      {/* ***** Footer ****** */}
      <div ref={footerRef} className={layoutStyles.footer}>
        <div className={layoutStyles.footer__container}>
          <div className={layoutStyles.footer__row}>
            <div className={layoutStyles.footer__col_1}>
              <h3>Download Our App</h3>
              <p> Available on Android and IOS</p>
              <div className={layoutStyles.footer__app_logo}>
                <Link href="/">
                  <a className={layoutStyles.footer__app_logo__img}>
                    <Image
                      src="/images/play-store.png"
                      alt="logo"
                      width="140px"
                      height="40px"
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a className={layoutStyles.footer__app_logo__img}>
                    <Image
                      src="/images/app-store.png"
                      alt="logo"
                      width="140px"
                      height="40px"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className={layoutStyles.footer__col_2}>
              <div className={layoutStyles.footer__logo}>
                <Link href="/">
                  <a>
                    <Logo classes={layoutStyles["footer-logo"]} />
                  </a>
                </Link>
              </div>
              <p>
                Our purpose is to sustainably make the pleasure and benefits of
                sports accessible to the many.
              </p>
            </div>
            <div className={layoutStyles.footer__col_3}>
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliates</li>
              </ul>
            </div>
            <div className={layoutStyles.footer__col_4}>
              <h3>Follow us</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>
                      <FontAwesomeIcon
                        className={layoutStyles.social_icon}
                        icon={["fab", "facebook"]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>
                      <FontAwesomeIcon
                        className={layoutStyles.social_icon}
                        icon={["fab", "twitter"]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>
                      <FontAwesomeIcon
                        className={layoutStyles.social_icon}
                        icon={["fab", "instagram"]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>
                      <FontAwesomeIcon
                        className={layoutStyles.social_icon}
                        icon={["fab", "youtube"]}
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p className={layoutStyles.copyright}>
          Copyright &copy; {new Date().getFullYear()} - RedStore
        </p>
      </div>
    </div>
  );
}
