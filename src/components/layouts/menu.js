import React from "react";
import axios from "axios";
import Config from "../../config";
import Link from "next/link";

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
        <Link href="/">
          <a>Нүүр</a>
        </Link>
        <Link href="/about">
          <a>Төслийн тухай</a>
        </Link>
        <Link href="/news">
          <a>Мэдээ</a>
        </Link>
        <Link href="/partners">
          <a>Бүтээгч түншүүд</a>
        </Link>
        <Link href="/knowledgebase">
          <a>Мэдлэгийн сан</a>
        </Link>
      </div>
    );
  }
}

export default MenuComponent;
