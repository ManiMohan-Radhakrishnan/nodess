import { useState } from "react";
import style from "./style.module.scss";
import { Modal, Table } from "react-bootstrap";
import { BiX } from "react-icons/bi";
const PromoCodeModal = ({ modalShow, setModalShow }) => {
  const handleClose = () => {
    setModalShow(false);
  };
  return (
    <>
      {" "}
      <Modal size="md" centered show={modalShow} className={"history-modal"}>
        <Modal.Header className="bg-dark p-0">
          <Modal.Title className="flex-fill">
            <div className={"modal-bid-history-title-content"}>
              <div className={"modal-bid-history-title"}>Add promo code</div>
              <div className={"modal-bid-history-filter"}>
                <BiX
                  role="button"
                  style={{ color: "#fff" }}
                  size={36}
                  onClick={handleClose}
                />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={style["modal-content-cus"]}>
            <p>
              Referral code (wallet address format) will not be automatically
              applied. Rebate will only be approved and airdropped by XX upon
              confirmation referrer has purchased a node.
            </p>
            <div className={style["input-wrapper"]}>
              <input type="text" />
            </div>
            <div className={style["button-wrapper"]}>
              <button className={style["btn-primary"]}>Cancel</button>
              <button className={style["btn-secondary"]}>Apply</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PromoCodeModal;
