import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
import FeatureCard from "../FeatureCard/FeatureCard";
import { FaCoffee, FaAppleAlt, FaCar, FaRocket } from "react-icons/fa"; // به عنوان مثال از آیکون‌ها استفاده شده است
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./CombinedComponet.css"; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.

const CombinedComponent = () => {
  return (
    <div className="combined-component">
      <div className="container">
        <div className="row f-d-col">
          <div className="col-12 col-md-6">
            <div className="left-section-content">
              <FeatureCard
                title="تبلیغ سختی است"
                description="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"
                classNameIc='combindIcon'
                icon={<FaCoffee />}
              />
              <FeatureCard
                title="
کدام یک از اینهاست"
                description="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"
                icon={<FaAppleAlt />}
                 classNameIc='combindIcon'
              />
              <FeatureCard
                title="یا کور شده است"
                description="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"
                icon={<FaCar />}
                 classNameIc='combindIcon'
              />
              <FeatureCard
                title="حقیقت مبارک"
                description="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"
                icon={<FaRocket />}
                 classNameIc='combindIcon'
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="left-section">
              <img
                src="image/features.jpg"
                alt="توضیح تصویر"
                className="intro-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedComponent;
