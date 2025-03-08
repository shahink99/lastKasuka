import React from "react";
import "./MainHeadr.css";

import { RiMarkPenLine } from "react-icons/ri";
import { CiDatabase } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";

//Componets
import Boxs from "../Boxs/Boxs";
import Header from "../Header/Header";

const MainHeader = () => {
  return (
    <div className="main-header">
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main-header__content">
              <h1 className="titlee">راه حل های قدرتمند دیجیتال با </h1>
              <h2 className="title-kasuka">KASUKA</h2>
              <p className="main-des">
                ما تیمی از بازاریابان با استعداد دیجیتال هستیم
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <Boxs  title="اطلاعات ذخیره شده" icon={CiDatabase} />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <Boxs title="عملکرد های پایانی" icon={RiMarkPenLine} />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <Boxs title="نمودار کیفی" icon={FaChartBar} />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <Boxs title="نمونه کارها" icon={FaCalendar} />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <Boxs title="متن نمایشی" icon={FaEnvelopeOpenText} />
          </div>
           <div className="col-12 col-sm-6 col-lg-4">
            <Boxs title="متن نمایشی" icon={FaEnvelopeOpenText} />
          </div>
        </div>
      </div>

      {/* <div className='overlay'></div> */}
    </div>
  );
};

export default MainHeader;
