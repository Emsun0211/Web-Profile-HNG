import React from "react";
import "./CSS/LinkBtn.css";

export const LinkBtn = ({ id, text, link }) => {
	return (
		<>
			<div className='link-container'>
				<a id={id} href={link} className='link-btn'>
					{text}
				</a>
			</div>
		</>
	);
};
