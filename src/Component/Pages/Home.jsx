import React from "react";
import "./Home.css";
import { TiArrowForwardOutline } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import gbenga from "../../images/gbenga.png";
import slack from "../../images/slack.png";
import github from "../../images/github.png";

import I4G from "../../images/I4G.png";
import { LinkBtn } from "../LinkBtn";

export const Home = () => {
	return (
		<>
			<div className='home-container'>
				<TiArrowForwardOutline className='ti-icon' />
				<BsThreeDots className='bs-three-dot' />
				<div className='profile-container'>
					<div className='profile-img'>
						<img src={gbenga} alt='' id='profile__img' />
					</div>
					<h4 className='profile-name'>Akinnukawe Gbenga</h4>
					<h4 className='profile-name'>Twitter: @emiloluwa</h4>
					<h4 className='profile-name-slack'>Emsun0211</h4>
				</div>
				<div className='link-container'>
					<a
						className='link-btn'
						id='twitter'
						href='https://twitter.com/emiloluwa'>
						Twitter Link
					</a>
				</div>

				<div className='link-container'>
					<a
						className='link-btn'
						id='btn__zuri'
						href='https://training.zuri.team/'>
						Zuri Team
					</a>
				</div>

				<div className='link-container'>
					<a className='link-btn' id='btn__zuri' href='http://books.zuri.team'>
						Zuri Books
					</a>
				</div>

				<div className='link-container'>
					<a
						className='link-btn'
						id='book__python'
						href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>'>
						Python Book
					</a>
				</div>

				<div className='link-container'>
					<a
						className='link-btn'
						id='book__design'
						href='https://books.zuri.team/design-rules '>
						Background Check for Coders
					</a>
				</div>

				<div className='link-container'>
					<a
						className='link-btn'
						id='pitch'
						href='https://background.zuri.team'>
						Design Books
					</a>
				</div>

				<div className='link-container'>
					<LinkBtn id={"Contact"} href='/Contact' text={"Contact"} />
				</div>
				<div className='social-icon'>
					<div className='slack-icon'>
						<img src={slack} alt='' />
					</div>
					<div className='slack-icon'>
						<img src={github} alt='' />
					</div>
				</div>
				<div className='hr-line'></div>
			</div>
			<footer>
				<p className='zuri-intenship'>
					Zuri <span>.</span> Intership
				</p>

				<p className='hng-text'>HNG Internship 9 Frontend Task</p>

				<div className='ingressive-img'>
					<img src={I4G} alt='' />
				</div>
			</footer>
		</>
	);
};
