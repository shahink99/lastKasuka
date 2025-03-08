import React from "react";
// import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCoffee, FaAppleAlt, FaCar, FaRocket } from "react-icons/fa"; // به عنوان مثال از آیکون‌ها استفاده شده است
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Advanced.css"; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.

const TwoColumnComponent = () => {
  return (
    <div className="two-column-component">
      <div className="row">
       
        {/* سمت چپ */}
        <div className="col-12 col-md-6">
          <h1 className="title-adnave">
            شایسته ترین لذت را به هر حال ارائه می دهد
          </h1>
          <p className="caption-advance">
            خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من
            به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد
            مقصر است
          </p>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="advance-card-item">
                {/* <FaCoffee className="icon-advance" /> */}
                <div className="advance-item-text">
                  <span className="number-advance">65</span>
                  <span className="caption-new">
                    مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="advance-card-item">
                {/* <FaAppleAlt className="icon-advance" /> */}
                <div className="advance-item-text">
                  <span className="number-advance">85</span>
                  <span className="caption-new">
                    پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او
                    تعریف می کنند رد می کند و آنها را حقیر می شمارد
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="advance-card-item">
                {/* <FaCar className="icon-advance" /> */}
                <div className="advance-item-text">
                  <span className="number-advance">35</span>
                  <span className="caption-new">
                    سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="advance-card-item">
                {/* <FaRocket className="icon-advance" /> */}
                <div className="advance-item-text">
                  <span className="number-advance">20</span>
                  <span className="caption-new">
                    جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم
                    نمی کند و هیچ وقت او را متهم نمی کند
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* سمت راست */}
        <div className="col-12 col-md-6">
          <img src="image/counts-img.jpg" alt="توضیح تصویر" className="image" />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;
