import React from "react";
import "../public/styles/style.min.css";
import "../public/styles/fontawesome/css/all.min.css";
import Router from "next/router";
import NProgress from "nprogress";
import "antd/dist/antd.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div className="next">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
