import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Team.css'; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.
import SectionHeader from '../SectionHeader/SectionHeader';

const TeamComponent = () => {
    const teamMembers = [
        {
            name: "والتر وایت",
            role: "مدیر ارشد اجرایی",
            image: "image/team-1.jpg", // مسیر تصویر
        },
        {
            name: "سارا جونسون",
            role: "مدیر تولید",
            image: "image/team-2.jpg", // مسیر تصویر
        },
        {
            name: "ویلیام اندرسون",
            role: "CTO",
            image: "image/team-3.jpg", // مسیر تصویر
        },
        {
            name: "آماندا جپسون",
            role: "حسابدار",
            image: "image/team-4.jpg", // مسیر تصویر
        },
    ];

    return (
        <div className="container">
            <SectionHeader title='تیم ما را بررسی کنید' subTitle='تیم'/>
            <div className='row'>
                {teamMembers.map((member, index) => (
                    <div className='col-12 col-sm-6 col-lg-4' key={index}>
                        <div className="team-card">
                            <img src={member.image} className="team-image"  alt='picure'/>
                            <div className='team-card-body'>
                                <h4 className="team-member-name">{member.name}</h4>
                                <span className="team-member-role">{member.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamComponent;