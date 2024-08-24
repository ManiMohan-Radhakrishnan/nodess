import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

export default function Footer({ className }) {
  return (
    <footer
      className={`${className} ${style.footer}  d-flex align-items-center py-4`}
    >
      <div className="container-fluid d-flex flex-column flex-md-row">
        <Image
          fetchpriority="high"
          src="/img_container.svg"
          width={866}
          height={26}
          alt="Image Container"
          className={`${style.imageContainer} object-contain`}
        />
        <Image
          fetchpriority="high"
          src="/img_link_impossible.svg"
          width={106}
          height={26}
          alt="Impossible Link"
          className={`${style.imageLink} object-contain`}
        />
        <div className="d-flex flex-grow-1 justify-content-end align-self-md-stretch">
          <div className="w-18 justify-content-center w-lg-100 w-md-100">
            <div className="d-flex w-100 align-items-center gap-3">
              <p className={`${style.divider} mb-0`}>|</p>
              <div>
                <p className={`${style.copyright} mb-0`}>
                  © 2024 <span className={style.nodess}>NODESS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
