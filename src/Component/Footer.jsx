import React from "react";
import I4G from "../images/I4G.png";

export const Footer = () => {
	return (
		<footer>
			<p className='zuri-intenship'>
				Zuri <span>.</span> Intership
			</p>

			<p className='hng-text'>HNG Internship 9 Frontend Task</p>

			<div className='ingressive-img'>
				<img src={I4G} alt='' />
			</div>
		</footer>
	);
};
