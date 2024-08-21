import React from "react";
import { useRouter } from "next/router";
import { noInternet } from "../utils/common";
import Image from "next/image";

const OnlineStatus = () => {
  const router = useRouter();

  const handleReload = () => {
    router.replace(router.asPath);
  };
  return (
    <div className="online-screen__section">
      <Image
        unoptimized={true}
        height="100"
        width="100"
        src={noInternet}
        alt="noInternet"
      />

      <div className="content">
        <h6>No connection</h6>
        <p>Please check your internet connectivity and try again</p>
        <button className="btn-retry" onClick={handleReload}>
          Retry
        </button>
      </div>
    </div>
  );
};

export default OnlineStatus;
