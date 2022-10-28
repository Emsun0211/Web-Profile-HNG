import React from "react";
import "./Home.css";
// import { LinkBtn } from "../LinkBtn";
// import { ProfilePic } from "../ProfilePic";
import gbenga from "../../images/gbenga.png";
import slack from "../../images/slack.webp";
import github from "../../images/GitHub-Mark.png";

export const Home = () => {
	console.log(github);
	return (
		<>
			<div className='home-container'>
				<div className='profile-container'>
					<div className='profile-img'>
						<img src={gbenga} alt='' id='profile__img' />
					</div>
					<h4 className='profile-name'>Akinnukawe Gbenga</h4>
				</div>
				<div className='link-container'>
					<a className='link-btn'>twitter Link</a>
				</div>

				<div className='link-container'>
					<a className='link-btn'>twitter Link</a>
				</div>

				<div className='link-container'>
					<a className='link-btn'>twitter Link</a>
				</div>

				<div className='link-container'>
					<a className='link-btn'>twitter Link</a>
				</div>
				<div className='social-icon'>
					<div className='slack-icon'>
						<img src={slack} alt='' />
					</div>
					<div className='slack-icon'>
						<img src={slack} alt='' />
					</div>
				</div>
			</div>
		</>
	);
};
