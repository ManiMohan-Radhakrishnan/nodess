import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Script from "next/script";
import store from "../redux/store";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/globals.scss";
import "../styles/jtm-global-style.scss";

import { useRouter } from "next/router";

import RainbowKit from "./rainbowkit";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Script />
      {router?.pathname !== "/nft-marketplace" &&
        Object.keys(router.query).length === 0 && (
          <div className="loader-container">
            <div className="top-loader"></div>
          </div>
        )}
      <div className="api-loader"> </div>
      <div className="whole-content background-set">
        {/* <SSRProvider> */}
        {/* {isOnline ? ( */}
        <RainbowKit>
          <Provider store={store}>
            <Component {...pageProps} />
            <ToastContainer
              position="top-right"
              autoClose={15000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Provider>
        </RainbowKit>
        {/* // ) : (
        //   <>
        //     <OnlineStatus />
        //   </>
        // )} */}
        {/* </SSRProvider> */}
      </div>
    </>
  );
}

export default MyApp;
