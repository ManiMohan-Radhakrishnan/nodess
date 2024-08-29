import _ from "lodash";

import style from "./style.module.scss";
import { FaCircleChevronRight } from "react-icons/fa6";
import dayjs from "dayjs";
import ToolTip from "../tooltip";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";
import NFTCounter from "../nft-counter";

const NFTBaseDetails = ({ saleList }) => {
  const [currentDate, setCurrentDate] = useState("");
  console.log("🚀 ~ NFTBaseDetails ~ currentDate:", currentDate);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date to MM/DD/YYYY
    const formattedDate = `${month}/${day}/${year}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <section className={style["verifier-info-block"]}>
        <div className={style["title-wrapper"]}>
          <p>
            {" "}
            Timezone: UTC{" "}
            {dayjs(saleList?.purchasePeriod?.startTime).format("A Z")}
          </p>
          <p>
            Timeline updates{" "}
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
                  Be sure to check the timeline regularly for updates. The
                  distribution dates listed are indicative and may change, so
                  stay tuned for the latest information.
                </>
              }
              placement="top"
            />
          </p>
        </div>
        <div className={style["verifier-info-wrapper"]}>
          <div className={style["purchase-info-wrapper"]}>
            <Image
              fetchpriority="high"
              unoptimized={true}
              width="40"
              height="40"
              priority={true}
              loading="eager"
              placeholder={"blur"}
              blurDataURL={"/sample.gif"}
              alt="media_logo_check11"
              src={
                saleList?.saleToken?.tokenImage
                  ? saleList?.saleToken?.tokenImage
                  : "/sample.gif"
              }
              role="button"
            />{" "}
            <div className={style["title-wrapper"]}>
              <h5 className="m-0"> Node Ends In :</h5>
            </div>
            <div className={style["title-wrapper"]}>
              {/* {dayjs(saleList?.purchasePeriod?.startTime).format(
                "MMMM D, YYYY"
              )}{" "} */}
              <div className={style["time-counter"]}>
                <NFTCounter
                  time={"2024-09-10"}
                  timeClass="alert-counter-time"
                  intervalClass="alert-counter-interval"
                  intervalGapClass="alert-counter-gap"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTBaseDetails;
