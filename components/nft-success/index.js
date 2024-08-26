import Lottie from "lottie-react";
import style from "./style.module.scss";
import tickAnimation from "../../images/json/Tick.json";
import Image from "next/image";

// import tickAnimation from "../../images/success.screen.gif";

const NFTSuccess = ({}) => {
  return (
    <>
      <section className={style["verifier-info-block"]}>
        <div
          className={`${style["verifier-info-wrapper"]} ${style["disconnect"]}`}
        >
          <div className={style["disconnecting"]}>
            <div className="icon-lock">
              <Lottie
                animationData={tickAnimation}
                className={style["lotti-icon"]}
                loop={false}
              />
              {/* <Image
                unoptimized={true}
                width="300"
                height="300"
                loading="eager"
                src={tickAnimation}
                alt="Player-type"
                priority={true}
                placeholder={"blur"}
                blurDataURL={"/sample.gif"}
              /> */}
            </div>
            <h5>The Node sale has ended</h5>
            <span>Node has been sold out</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTSuccess;

// import { useState } from "react";
// import style from "./style.module.scss";
// import { Modal, Table } from "react-bootstrap";
// import { BiX } from "react-icons/bi";
// import Lottie from "lottie-react";
// import tickAnimation from "../../images/json/Tick.json";
// const NFTSuccess = ({ modalShow, setModalShow }) => {
//   const handleClose = () => {
//     setModalShow(false);
//   };
//   return (
//     <>
//       {" "}
//       <Modal size="md" centered show={modalShow} className={"history-modal"}>
//         <Modal.Header className="bg-dark p-0">
//           <Modal.Title className="flex-fill">
//             <div className={"modal-bid-history-title-content"}>
//               <div className={"modal-bid-history-title"}>Add promo code</div>
//               <div className={"modal-bid-history-filter"}>
//                 <BiX
//                   role="button"
//                   style={{ color: "#fff" }}
//                   size={36}
//                   onClick={handleClose}
//                 />
//               </div>
//             </div>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <section className={style["verifier-info-block"]}>
//             <div
//               className={`${style["verifier-info-wrapper"]} ${style["disconnect"]}`}
//             >
//               <div className={style["disconnecting"]}>
//                 <div className="icon-lock">
//                   <Lottie
//                     animationData={tickAnimation}
//                     className={style["lotti-icon"]}
//                     loop={false}
//                   />
//                 </div>
//                 <h5>The sale has ended</h5>
//                 <span>Node has been sold out</span>
//               </div>
//             </div>
//           </section>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default NFTSuccess;
