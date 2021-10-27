import { Row, Col } from "antd";
import React from "react";

export const Range = () => {
  return (
    <Row className="range">
      <div>Хэрэгжилтийн цар хүрээний товч мэдээлэл</div>
      <div>
        <h1>21</h1>
        <p>Аймаг</p>
      </div>
      <div>
        <h1>2023</h1>
        <p>Цар хүрээ</p>
      </div>
      <div>
        <h1>$2.4mil</h1>
        <p>Хөрөнгө оруулалт</p>
      </div>
      <div>
        <h1>11</h1>
        <p>Олон нийтийн байгууллага</p>
      </div>
    </Row>
  );
};
