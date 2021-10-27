import React from "react";
import {
  MailOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { Input } from "antd";

function Footer() {
  return (
    <footer>
      <div>
        <h3>Э-майлээр мэдээлэл хүлээн авах</h3>
        <p>
          Та бидний төслийн тухай мэдээллийг цаг алдалгүй авахыг хүсвэл э-майл
          хаягаа оруулаарай
        </p>
        <Input placeholder="E-mail address" prefix={<MailOutlined />} />
      </div>
      <div>
        <p>Зохиогчийн эрхийн хуулиар хамгаалагдсан © 2021 oн. MASAM II</p>
        <FacebookFilled />
        <TwitterCircleFilled />
        <YoutubeFilled />
        <LinkedinFilled />
        <InstagramFilled />
        <p>Санал хүсэлт: adorj@worldbank.orj</p>
      </div>
    </footer>
  );
}

export default Footer;
