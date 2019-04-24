import React from "react";

import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenyouInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red" />
                <div className="vn_icon" style={{ background: `url(${icon_calendar})` }} />
                <div className="vn_title">Event Date & Time</div>
                <div className="vn_desc"> Dec. 16, 2019 @ 9pm</div>
              </div>
            </div>
          </div>

          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red" />
                <div className="vn_icon" style={{ background: `url(${icon_calendar})` }} />
                <div className="vn_title">Event Date & Time</div>
                <div className="vn_desc"> Dec. 16, 2019 @ 9pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenyouInfo;
