import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "react-bootstrap";

import { getHideMenuStatus } from "../redux/reducers/user_reducer";

import images from "./../utils/images.json";

const NotFound = () => {
  const hideMenus = useSelector(getHideMenuStatus);
  return (
    <>
      <section className="notfound-section">
        <div className="container">
          <div
            className="row align-items-center justify-content-center"
            style={{
              minHeight: "calc(100vh - 10rem)",
            }}
          >
            <center>
              {hideMenus ? (
                <Navbar.Brand
                  onClick={() =>
                    window.open(
                      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/nft-marketplace/mcl?hideMenus=true`,
                      "_self"
                    )
                  }
                  role="button"
                  className="not-found "
                >
                  <Image
                    unoptimized={true}
                    src={images.jumpTradeLogoSVG}
                    className="logo-img"
                    alt="JumpTradelogo"
                    width={200}
                    height={200}
                  />
                </Navbar.Brand>
              ) : (
                <Navbar.Brand
                  onClick={() =>
                    window.open(process.env.NEXT_PUBLIC_WEBSITE_URL, "_blank")
                  }
                  role="button"
                  className="not-found "
                >
                  <Image
                    unoptimized={true}
                    src={images.jumpTradeLogoSVG}
                    className="logo-img"
                    alt="JumpTradelogo"
                    width={200}
                    height={200}
                  />
                </Navbar.Brand>
              )}

              <div className="notfound-text-block">
                <h1>404</h1>
                <h4>This page doesn&apos;t exist.</h4>
                <h5>
                  Go to Marketplace{" "}
                  {hideMenus ? (
                    <Link
                      legacyBehavior
                      href={"/nft-marketplace/mcl?hideMenus=true"}
                      target="_self"
                      rel="noreferrer"
                    >
                      <div>Home</div>
                    </Link>
                  ) : (
                    <Link
                      legacyBehavior
                      href={"/"}
                      target="_self"
                      rel="noreferrer"
                    >
                      <div>Home</div>
                    </Link>
                  )}{" "}
                  Page
                </h5>
              </div>
            </center>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
