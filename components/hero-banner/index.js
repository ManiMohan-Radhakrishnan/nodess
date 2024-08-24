import { useState, useEffect, useRef, useCallback } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import BannerImage from "../../images/banner-img.png";

import style from "./style.module.scss";
import "swiper/css/pagination";
import { TbWorld } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";
import ToolTip from "../tooltip";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const HeroBanner = ({}) => {
  const swiperRef = useRef();

  return (
    <>
      <section className={style["jt-hero-section"]}>
        <Swiper
          ref={swiperRef}
          className={`${style["verifier-hero-carousel"]}`}
          slidesPerView={1}
          centeredSlides={true}
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 15000, disableOnInteraction: true }}
          speed={500}
          // loop
          uniqueNavElements
        >
          <SwiperSlide>
            <div className="item">
              <section className={`${style["hero-banner-sec"]}`}>
                <div className={style["banner-content-wrapper"]}>
                  <div className={style["image-content-wrapper"]}>
                    <Image
                      fetchpriority="high"
                      unoptimized={true}
                      width="300"
                      height="300"
                      priority={true}
                      loading="eager"
                      placeholder={"blur"}
                      blurDataURL={"/sample.gif"}
                      alt="BannerImage"
                      src={BannerImage}
                      role="button"
                    />
                  </div>
                  <div className={style["content-wrapper"]}>
                    <div className={style["inner-content-wrapper"]}>
                      <h1>NODESS</h1>
                      <div className={style["secial-icon-wrapper"]}>
                        <TbWorld color="#a69dbe" />
                        <RiTwitterXFill color="#a69dbe" />
                        <TbWorld color="#a69dbe" />
                        <RiTwitterXFill color="#a69dbe" />
                        <TbWorld color="#a69dbe" />
                        <RiTwitterXFill color="#a69dbe" />
                        <TbWorld color="#a69dbe" />
                        <RiTwitterXFill color="#a69dbe" />
                      </div>
                      <p>
                        NODESS is the largest modular data layer for gaming, AI,
                        and ∞, pioneering a future where data generates value
                        for all. $20M from Temasek’s Vertex, ConsenSys
                        (Metamask), OKX, HashKey, and more.
                      </p>
                      <div className={style["network-wrapper"]}>
                        <div className={style["icon-wrapper"]}>
                          <p>Network</p>
                          <ToolTip
                            icon={
                              <BsFillQuestionCircleFill
                                color={"#a984fdcc"}
                                size={14}
                                className="mb-1 check-icon"
                              />
                            }
                            content={
                              <>
                                If the bid is not accepted before the shown time
                                in the countdown, the bid will expire. <br />
                              </>
                            }
                            placement="top"
                          />
                        </div>
                        <Image
                          fetchpriority="high"
                          unoptimized={true}
                          width="20"
                          height="20"
                          priority={true}
                          loading="eager"
                          placeholder={"blur"}
                          blurDataURL={"/sample.gif"}
                          alt="BannerImage"
                          src={
                            "https://verifier.carv.io/images/icons/networks/42161.svg"
                          }
                          role="button"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HeroBanner;
