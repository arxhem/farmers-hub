import React from "react";
import "./Activity.css";
import { BsArrowRightShort } from "react-icons/bs";
import tractor from "../../../assets/tractor.jpg";

const Activity = () => {
	return (
		<div className="activitySection">
			<div className="heading flex">
				<h1>Recent Activity</h1>
				<button className="btn flex">
					See All
					<BsArrowRightShort className="icon" />
				</button>
			</div>
      <div className="secContainer flex">
        <div className="singleCustomer">
          <div className="customerDetails">
          <span className="name">Name</span>
          <small>Order</small>
          </div>
          <div className="duration">
            time
          </div>

        </div>
      </div>
		</div>
	);
};

export default Activity;
