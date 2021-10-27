import React from "react";
import axios from "axios";
import Config from "../../config";

class MenuComponent extends React.Component {
  state = { headerMenu: [] };

  componentDidMount() {
    axios
      .get(`${Config.apiUrl}/menus/v1/menus/header-menu`)
      .then((res) =>
        this.setState({
          headerMenu: res.data,
          loading: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="main-header">
        <img src="images/masamLogo.png" />
      </div>
    );
  }
}

export default MenuComponent;
