import React from "react";
import "./Introduction.css"; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.

import ShowMoreText  from 'react-show-more-text' 

import { CiDatabase } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

const Introduction = () => {
  const mainText = `  شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت
                  دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی
                  روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب
                  و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و
                  با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در
                  ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی
                  بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه
                  فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده
                  مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت
                  و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان،
                  نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند.`;
  return (
    <div className="introduction">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="right-section">
              <h1 className="titleee">شرکت دیجیتال کاسوکا</h1>
              <div className="description-content">
                {/* <p className="descreption-tilte">
                  شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت
                  دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی
                  روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب
                  و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و
                  با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در
                  ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی
                  بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه
                  فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده
                  مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت
                  و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان،
                  نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند.
                </p> */}

                <ShowMoreText 
                  lines={2}
                  more='نمایش بیشتر'
                  less='نمایش کمتر'
                  anchorClass="custom-anchor"
                  >
                  {mainText}
                </ShowMoreText>
              
                <ul className="descreption-ul">
                  <li className="descrption-li">
                    <span className="spanDesc">*</span>
                    <p className="pDescreaption">
                      ۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و
                      راهکارهای نوین بازاریابی
                    </p>
                  </li>
                  <li className="descrption-li">
                    <span className="spanDesc">*</span>
                    <p className="pDescreaption">
                      مرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال
                      برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر
                      فعالیت های برندینگ و بازاریابی شما می باشد.
                    </p>
                  </li>
                  <li className="descrption-li">
                    <span className="spanDesc">*</span>
                    <p className="pDescreaption">
                      برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال
                      مارکتینگ ثبت نام کنید
                    </p>
                  </li>
                </ul>
                <p className="pLast">
                  خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار
                  از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از
                  برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا
                  مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می
                  گردد.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="left-section">
              <img
                src="image/about.jpg"
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

export default Introduction;
