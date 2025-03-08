import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.
import SectionHeader from '../SectionHeader/SectionHeader';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = {
        all: ['image/portfolio-1.jpg', 'image/portfolio-2.jpg', 'image/portfolio-3.jpg','image/portfolio-6.jpg', 'image/portfolio-8.jpg','image/portfolio-9.jpg'],
        app: ['image/portfolio-8.jpg', 'image/portfolio-6.jpg', 'image/portfolio-1.jpg'],
        product: ['image/portfolio-9.jpg', 'image/portfolio-3.jpg', 'image/portfolio-8.jpg','image/portfolio-2.jpg'],
        web: ['image/portfolio-2.jpg', 'image/portfolio-3.jpg', 'image/portfolio-1.jpg'],
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        
    };

    return (
        <Container fluid className="portfolio">
            <SectionHeader title='نمونه کارها ما را بررسی کنید' subTitle='نمونه کارها'/>
            <Nav className="category-header mb-4">
                <Nav.Item className={activeCategory === 'all' ? 'nav-item--active' : ''}> 
                    <Nav.Link  onClick={() => handleCategoryChange('all')} active={activeCategory === 'all'}>
                        همه
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className={activeCategory === 'app' ? 'nav-item--active' : ''}>
                    <Nav.Link  onClick={() => handleCategoryChange('app')} active={activeCategory === 'app'}>
                        برنامه
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className={activeCategory === 'product' ? 'nav-item--active' : ''}>
                    <Nav.Link  onClick={() => handleCategoryChange('product')} active={activeCategory === 'product'}>
                        محصول
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className={activeCategory === 'web' ? 'nav-item--active' : ''}>
                    <Nav.Link  onClick={() => handleCategoryChange('web')} active={activeCategory === 'web'}>
                        اینترنت
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className='row'>
                {categories[activeCategory].map((item) => (
                    <div className='col-12 col-sm-6 col-lg-4 margin-bottom' >
                        <div className="portfolio-card">
                            <img className='portfolio-img' src={item} alt="pic" />
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Portfolio;