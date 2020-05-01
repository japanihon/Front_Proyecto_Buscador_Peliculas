import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/logo.png";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Inicio</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/new-movies">Ultimos Lanzamientos</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/popular">Populares</Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/search">Buscador</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
