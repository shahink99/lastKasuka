import React from "react";
import "./BackGorundSection.css"; // اطمینان حاصل کنید که این فایل CSS را ایجاد کرده‌اید.

const BackgroundSection = () => {
  return (
    <div className="background-section">
      <div className="overlay">
        <h1 className="title-section">فراخوانی برای اقدام</h1>
        <p className="captionn">
          اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد
          سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به
          دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود
          را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.
        </p>
        <button className="action-buttonn">فراخوانی برای اقدام</button>
      </div>
    </div>
  );
};

export default BackgroundSection;
