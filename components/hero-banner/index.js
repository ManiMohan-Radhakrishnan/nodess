import { useState, useEffect, useRef, useCallback } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import BannerImage from "../../images/banner-img.png";

import style from "./style.module.scss";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { TbWorld } from "react-icons/tb";
import {
  RiDiscordFill,
  RiMediumFill,
  RiTelegramFill,
  RiTwitterXFill,
} from "react-icons/ri";
import ToolTip from "../tooltip";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import images from "../../utils/images-new.json";
import { IoNewspaperSharp } from "react-icons/io5";
import BannerImage1 from "../../images/banner.png";

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
          modules={[Navigation, Autoplay, EffectFade, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500, disableOnInteraction: true }} // Enable autoplay
          speed={500}
          loop
          effect={"fade"}
        >
          {/* <SwiperSlide>
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
                      <h1>NODESS SALE</h1>
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
                        NODESS Sale is the leading modular data layer for
                        gaming, AI, and beyond, driving a future where data
                        creates value for everyone.
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
                                Available networks in this token sale. Switch
                                network via the wallet to participate.. <br />
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
                            "https://cdn-icons-png.freepik.com/512/14993/14993567.png"
                          }
                          role="button"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="item">
              <section className={`${style["hero-banner-sec"]}`}>
                <div className={style["bg-content-wrapper"]}>
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
                    src={
                      "https://cimg.co/news/85706/216084/adobestock-phive2015-1.jpeg"
                    }
                    role="button"
                  />
                  <div
                    className={`${style["content-container"]} ${style["justify-end"]}`}
                  >
                    <div className={style["inner-content-wrapper"]}>
                      <h1>NODESS SALE</h1>
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
                        NODESS Sale is the leading modular data layer for
                        gaming, AI, and beyond, driving a future where data
                        creates value for everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SwiperSlide> */}

          <SwiperSlide>
            <div className="item">
              <section className={`${style["hero-banner-sec"]}`}>
                <div className={style["bg-content-wrapper"]}>
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
                    src={
                      "https://img.freepik.com/free-photo/abstract-technology-background-concept_1194-617185.jpg"
                    }
                    role="button"
                  />
                  <div className={style["content-container"]}>
                    <div className={style["inner-content-wrapper"]}>
                      <h1>NODESS SALE</h1>
                      <div className={style["secial-icon-wrapper"]}>
                        <TbWorld color="#a69dbe" />
                        <RiTwitterXFill color="#a69dbe" />
                        <RiDiscordFill color="#a69dbe" />
                        <RiTelegramFill color="#a69dbe" />
                        <RiMediumFill color="#a69dbe" />
                        <RiDiscordFill color="#a69dbe" />
                        <IoNewspaperSharp color="#a69dbe" />
                      </div>
                      <p>
                        The ultimate platform for buying and selling
                        decentralized nodes. Whether your&apos;e looking to
                        expand your network or sell your existing nodes, our
                        marketplace provides a secure, transparent, and
                        efficient environment for all your node trading needs.
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
                                Available networks in this token sale. Switch
                                network via the wallet to participate.. <br />
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
                            "https://cdn-icons-png.freepik.com/512/14446/14446222.png?uid=R160862078"
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
