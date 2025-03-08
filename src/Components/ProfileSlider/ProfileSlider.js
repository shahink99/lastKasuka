import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // استایل‌های Swiper
import './ProfileSlider.css'; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.

const ProfileSlider = () => {
    const profiles = [
        {
            name: "رزی",
            role: "صاحب فروشگاه",
            caption: "با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود",
            profileImage: "image/team-2.jpg",
            backgroundImage: "image/cta-bg.jpg",
        },
        {
            name: "سیلوستر",
            role: "طراح",
            caption: "کبا این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود",
            profileImage: "image/team-1.jpg",
            backgroundImage: "image/cta-bg.jpg",
        },
          {
            name: "تامی",
            role: "طراح",
            caption: "کبا این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود",
            profileImage: "/image/team-3.jpg",
            backgroundImage: "image/cta-bg.jpg",
        },
        // می‌توانید پروفایل‌های بیشتری اضافه کنید
    ];

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="profile-slider"
            loop = {true}
        >
            {profiles.map((profile, index) => (
                <SwiperSlide key={index}>
                    <div 
                        className="slide" 
                        style={{ backgroundImage:` url(${profile.backgroundImage})` }}
                    >
                        <div className="overlay">
                            <img 
                                src={profile.profileImage} 
                                alt={profile.name} 
                                className="profile-image" 
                            />
                            <h2 className="user-name">{profile.name}</h2>
                            <h3 className="user-role">{profile.role}</h3>
                            <p className="user-caption">{profile.caption}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProfileSlider;