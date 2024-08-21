import dayjs from "dayjs";
import Image from "next/image";
import { forwardRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

import useScrollPosition from "../../utils/scroll-position";
import style from "./style.module.scss";
import images from "../../utils/images.json";

import { currencyFormat, roundDown } from "../../utils/common";

import { IoWalletOutline } from "react-icons/io5";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = ({ bgImage = false }) => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <>
        <Navbar
          bg="dark"
          expand="md"
          variant="dark"
          sticky="top"
          className={`${
            bgImage
              ? `${style["bgImageHeader"]}`
              : scrollPosition > 60
              ? `${style["scroll_position"]}`
              : `${style["transparent"]}`
          }`}
        >
          <Container fluid>
            <Navbar.Brand
              onClick={() => {
                window.open(process.env.NEXT_PUBLIC_WEBSITE_URL, "_self");
              }}
              role="button"
              className={style["head-title"]}
            >
              <Image
                unoptimized={true}
                height={30}
                width={30}
                src={images.jumpTradeLogo}
                alt="jumpTradeLogo"
                className={style["logoImage"]}
                priority={true}
              />
            </Navbar.Brand>
            <>
              {/* <Nav className="d-flex me-0 ms-auto">
                <Nav.Link
                  id="drop_outer"
                  role="button"
                  onClick={() => {}}
                  className="theme-btn"
                >
                  Connect Wallet <IoWalletOutline />
                 
                </Nav.Link>
              </Nav> */}
              <ConnectButton />
            </>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default Header;
