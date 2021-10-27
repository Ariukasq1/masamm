import WPAPI from "wpapi";
import React from "react";
import Layout from "../components/layouts/Layout";
import Config from "../config";

// const wp = new WPAPI({ endpoint: Config.apiUrl });

class Index extends React.Component {
  // static async getInitialProps() {
  //   let apiMethod = wp.categories();

  //   const mainTabCategory = await apiMethod
  //     .parent(21)
  //     .embed();

  //   return { mainTabCategory };
  // }

  render() {
    return (
      <Layout>
        <div className="relative">
          <div className="introduction">
            <div>
              <p>МАСАМ төслийн хоёр дахь үе шат</p>
              <h1>
                Монгол Улсад ил тод байдал, оролцоог сайжруулахын төлөө нийгмийн
                эгэх хариуцлагыг уялдуулах нь
              </h1>
              <button>MASAM II танилцуулга</button>
            </div>
            <div>
              <img src="images/image1.png" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
