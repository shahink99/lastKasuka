import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCoffee, FaAppleAlt, FaCar, FaRocket, FaHome, FaUsers } from 'react-icons/fa'; // به عنوان مثال از آیکون‌ها استفاده شده است
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.

// component

import SectionHeader from '../SectionHeader/SectionHeader';

import ServiceCard from '../ServicesCard/Services';

const Services = () => {
    return (
        <div className="container">
            <SectionHeader title='خدمات ما را بررسی کنید' subTitle='خدمات'/>
            <div className="row">
                <div className='col-12 col-md-6 col-lg-4'>
                    <ServiceCard icon={<FaCoffee />} title="لورم اپیسوم" description="برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد" />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <ServiceCard icon={<FaAppleAlt />} title=" مشاهده می کنید" description="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <ServiceCard icon={<FaCar />} title="دردهای بزرگ" description="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <ServiceCard icon={<FaRocket />} title="هیچکس دیگر" description="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم" />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <ServiceCard icon={<FaHome />} title="لولا را پاک کنید" description="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <ServiceCard icon={<FaUsers />} title="دیوا دان" description="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد" />
                </div>
            </div>
        </div>
    );
};



export default Services;