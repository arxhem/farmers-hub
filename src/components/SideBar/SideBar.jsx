import React from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front, BsQuestionCircle, BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";

const SideBar = () => {
	const navigate = useNavigate();
	return (
		<div className="sideBar grid">
			<div className="logoDiv flex">
				<h2>1Neuron</h2>
				{/* <img src={logo} alt="logo" /> */}
			</div>
			<div className="menuDiv">
				<h3 className="divTitle ">Quick Menu</h3>
				<ul className="menuList grid">
					<li className="listItem">
						<a href="/" className="menuLink flex" alt="logo">
							<IoMdSpeedometer className="icon" />
							<span className="smallText">Dashboard</span>
						</a>
					</li>

					<li className="listItem" onClick={()=>navigate("/chabot")}>
						<a href="/Chatbot" className="menuLink flex" alt="logo">
							<FaRobot className="icon" />
							<span className="smallText">Chatbot</span>
						</a>
					</li>

					<li className="listItem">
						<a href="/" className="menuLink flex" alt="logo">
							<MdDeliveryDining className="icon" />
							<span className="smallText">My orders</span>
						</a>
					</li>

					<li className="listItem">
						<a href="/" className="menuLink flex" alt="logo">
							<BsTrophy className="icon" />
							<span className="smallText">Products</span>
						</a>
					</li>
				</ul>
			</div>


      <div className="settingsDiv">
				<h3 className="divTitle "> SETTINGS</h3>
				<ul className="menuList grid">
					<li className="listItem">
						<a href="/" className="menuLink flex" alt="logo">
							<AiOutlinePieChart className="icon" />
							<span className="smallText">charts</span>
						</a>
					</li>

					<li className="listItem">
						<a href="/" className="menuLink flex" alt="logo">
							<BiTrendingUp className="icon" />
							<span className="smallText">Trends</span>
						</a>
					</li>

					<li className="listItem">
						<a href="/" className="menuLink flex" alt="logo">
							<MdOutlinePermContactCalendar className="icon" />
							<span className="smallText">Contact</span>
						</a>
					</li>

					<li className="listItem">
						<a href="/" className="menuLink flex" alt="logo">
							<BsCreditCard2Front className="icon" />
							<span className="smallText">Biling</span>
						</a>
					</li>

          
				</ul>
			</div>
			<div className="sideBarCard">
				<BsQuestionCircle className="icon"/>
				<div className="cardContent">
				<div className="circle1"></div>
				<div className="circle2"></div>
				<h3>Help</h3>
				<p>Having trouble in 1Neuron, contact us</p>
				<button className="btn">Go to Help Center</button>
				</div>
				
				
			</div>
		</div>
	);
};

export default SideBar;
