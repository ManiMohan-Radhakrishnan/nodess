import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Head from "next/head";
import Script from "next/script";
import mixpanel from "mixpanel-browser";
import store from "../redux/store";
import useLoader from "../hooks/useLoader";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/globals.scss";
import "../styles/jtm-global-style.scss";
import {
  user_load_by_token_thunk,
  user_logout_thunk,
} from "../redux/thunk/user_thunk";
import { getCookies, removeCookies, setCookies } from "../utils/cookies";
import * as fbq from "../utils/fbpixel";
import { useRouter } from "next/router";
import {
  setDeviceType,
  setHideMenuStatus,
  setHomeMenuStatus,
  setUrlPaths,
} from "../redux/reducers/user_reducer";
import { SSRProvider } from "react-bootstrap";
// import OnlineStatus from "./online-status";

import useOnlineStatus from "../hooks/useOnlineOfflineStatus";
import OnlineStatus from "./online-status";
import RainbowKit from "./rainbowkit";

function MyApp({ Component, pageProps }) {
  const isOnline = useOnlineStatus();
  const router = useRouter();
  const hideMenus = router.query.hideMenus;

  useEffect(() => {
    hideMenus && document.body.classList.add("hide-header-forapp");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLoader();
  useEffect(() => {
    const token = router?.query?.token || getCookies();
    if (router?.query?.token) {
      removeCookies();
      setCookies(router?.query?.token);
    }
    if (token) store.dispatch(user_load_by_token_thunk(token));
    if (!token) store.dispatch(user_logout_thunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.query?.token]);
  useEffect(() => {
    if (router?.query?.hideMenus === "true")
      store.dispatch(setHideMenuStatus(true));
    mixpanel.init("fb37da042db19dafef9b171500d64106", { debug: true });

    if (router?.query?.mobiletype) {
      store.dispatch(setDeviceType(router?.query?.mobiletype));
    }
    if (router.query.homePage) {
      store.dispatch(setHomeMenuStatus(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (router?.query?.hideMenus === "true") {
      store.dispatch(setUrlPaths(router.asPath));
    }
  }, [router]);

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
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
