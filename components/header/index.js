import { Navbar, Container } from "react-bootstrap";

import useScrollPosition from "../../utils/scroll-position";
import style from "./style.module.scss";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import CoinImage from "../../images/coin.svg";
import Image from "next/image";

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
                fetchpriority="high"
                unoptimized={true}
                height="auto"
                width="100"
                src={CoinImage}
                alt="jumpTradeLogo"
                className={style["logoImage"]}
                priority={true}
              />
              {/* <div
                className="sub-head-title header-powereby "
                role="button"
                onClick={() => {
                  window.open(process.env.NEXT_PUBLIC_WEBSITE_URL, "_self");
                }}
              >
                <h3>NODESS SALE</h3>
              </div> */}
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
