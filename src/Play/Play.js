import React from 'react'
import './Play.css'

class Play extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<a href='#' dataText='Home'>
							Home
						</a>
					</li>
					<li>
						<a href='#' dataText='About'>
							About
						</a>
					</li>
					<li>
						<a href='#' dataText='Team'>
							Team
						</a>
					</li>
					<li>
						<a href='#' dataText='Contact'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default Play
