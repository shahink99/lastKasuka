import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // آیکون‌ها
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContactUs.css"; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.
import SectionHeader from "../SectionHeader/SectionHeader";

const ContactUsComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // جلوگیری از رفتار پیش‌فرض فرم
    console.log("Form submitted!");
    // سایر عملیات‌های مورد نیاز
  };

  return (
    <div className="container">
      <SectionHeader title="با ما تماس بگیرید" subTitle="تماس با ما" />
      <div className="row">
        {/* سمت راست - اطلاعات تماس */}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="info-card">
            <div>
              <div className="info-item">
                <div className="icon-sakhleyan">
                  <FaPhone className="info-icon" />
                </div>
                <h4 className="info-title">تلفن</h4>
                <p className="info-caption">09149907096</p>
              </div>
              <div className="info-item">
                <div className="icon-sakhleyan">
                  <FaEnvelope className="info-icon" />
                </div>
                <h4 className="info-title">ایمیل</h4>
                <p className="info-caption">info@example.com</p>
              </div>
              <div className="info-item">
                <div className="icon-sakhleyan">
                  <FaMapMarkerAlt className="info-icon" />
                </div>
                <h4 className="info-title">آدرس</h4>
                <p className="info-caption">خیابان اصلی، تهران، ایران</p>
              </div>
            </div>
          </div>
        </div>

        {/* سمت چپ - فرم تماس */}
        <div className="col-12 col-sm-6 col-lg-8">
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <input className="inp" type="text" placeholder="نام" />
            <input className="inp" type="text" placeholder="ایمیل" />
            <input className="inp " type="text" placeholder="عنوان" />
            <textarea className="textarea" placeholder="پیام"></textarea>
            <button className="btnnn-submit" type="submit">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
