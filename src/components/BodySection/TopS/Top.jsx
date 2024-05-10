import React from "react";
import "./Top.css";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import userImage from "../../../assets/user-circle-fill.svg";
import video from "../../../assets/video.mp4";
import wheat from "../../../assets/wheat.png";
import { BsArrowRightShort } from "react-icons/bs";

const Top = () => {
	return (
		<div className="topSection">
			<div className="headerSection flex">
				<div className="title">
					<h1>Welcome to 1Neuron</h1>
					<p>Hello,Welcome Back</p>
				</div>
				<div className="searchBar flex">
					<input type="text" placeholder="Search Dashboard" />
					<BiSearchAlt className="icon" />
				</div>
				<div className="adminDiv flex">
					<TbMessageCircle className="icon" />
					<IoMdNotificationsOutline className="icon" />
					<div className="adminImage">
						<img src={userImage} alt="" />
					</div>
				</div>
			</div>

			<div className="cardSection flex">
				<div className="rightCard flex">
					<h1>For the Farmers</h1>
					{/* <p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
						
					</p> */}

					<div className="buttons flex">
						<button className="btn">Explore more</button>
						<button className="btn transparent">Sellers</button>
					</div>

					<div className="videoDiv">
						<video src={video} autoPlay muted loop>
							{" "}
						</video>
					</div>
				</div>

				<div className="leftCard flex">
					<div className="main flex">

						<div className="textDiv">
							<h1>My stat</h1>

							<div className="flex">
								<span>
									Today's <br /> orders
								</span>
								<span>
									Today's <br /> orders
								</span>
							</div>

							<span className="link flex">
								Goto my orders <BsArrowRightShort className="icon" />
							</span>
						</div>
            <div className="imgDiv">
              <img src={wheat} alt="" />
            </div>

            {/* <div className="sideBarCard">
				<BsQuestionCircle className="icon"/>
				<div className="cardContent">
				<div className="circle1"></div>
				<div className="circle2"></div>
				<h3>Help</h3>
				<p>Having trouble in 1Neuron, contact us</p>
				<button className="btn">Go to Help Center</button>
				</div>
				
				
			</div> */}

					</div>
				</div>
			</div>
		</div>
	);
};

export default Top;
