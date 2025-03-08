import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // آیکون‌ها
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.

const FooterComponent = () => {

    const handleSubmit = (event) => {
    event.preventDefault(); // جلوگیری از رفتار پیش‌فرض فرم
    console.log("Form submitted!");
    // سایر عملیات‌های مورد نیاز
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* ستون اول - اطلاعات شرکت */}
          <div
            className="col-12 col-sm-6 col-lg-4"
            style={{ textAlign: "center" }}
          >
            <div className="footer-right-items">
              <h4 className="footer-title">Kasuka</h4>
              <p className="pFooter">09149907096</p>
              <p className="pFooter">تهران، خیابان آزادی</p>
              <p className="pFooter">shahinkarimi@gmail.com</p>
              <div
                className="social-icons"
                style={{ justifyContent: "center" }}
              >
                <FaFacebook className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaInstagram className="social-icon" />
                <FaLinkedin className="social-icon" />
              </div>
            </div>
          </div>

          {/* ستون دوم - لینک‌های مفید */}
          <div
            className="col-12 col-sm-6 col-lg-4"
            style={{ textAlign: "center" }}
          >
            <h4 className="footer-title">لینک‌های مفید</h4>
            <ul>
              <li>درباره ما</li>
              <li>خدمات ما</li>
              <li>تماس با ما</li>
              <li>سوالات متداول</li>
              <li>مقالات</li>
            </ul>
          </div>

          {/* ستون سوم - عضویت در خبرنامه */}
          <div
            className="col-12 col-sm-6 col-lg-4"
            style={{ textAlign: "center" }}
          >
            <h4 className="footer-title">عضویت در خبرنامه</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNewsletterEmail">
                <Form.Control
                  className="btn-footer"
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </Form.Group>
              <Button className="btnFooter" variant="primary" type="submit">
                عضویت
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
