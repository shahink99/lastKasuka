import React , {useState} from "react";

import "./Header.css";

function Header() {

  const [showMenu , setShowMenu] = useState(false)


  const HandleMenuState = () => {
    setShowMenu((preve) => !preve)
    console.log(showMenu);
    
  }

  return (
    <div className="Header">
      <div className="Header-holder">
        <div className="Header-items">
          <div className="Header-items__logo-wrapper">
            <img src="favicon.ico" alt="" className="Header-items__logo" />
          </div>

          <div className={`${showMenu ? 'hamberger-line--open' : 'hamberger-menu'}`} onClick={() => HandleMenuState()}>
            <span className="hamberger-line"></span>
          </div>

          <div className={`${showMenu ? 'Header-items__links-wapper--active' : 'Header-items__links-wapper'}`}>
            <ul className={`${showMenu ? 'Header-items__links--active' : 'Header-items__links'}`}>
              <li className="Header-items__link">خانه</li>
              <li className="Header-items__link">رزومه</li>
              <li className="Header-items__link">سروس ها</li>
              <li className="Header-items__link">ارتباط با ما</li>
              <li className="Header-items__link">درباره ما</li>
            </ul>
          </div>

          <div className="Header-items__rejester">
            <span className="Header-items__singIn">ورود / ثبت نام</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
