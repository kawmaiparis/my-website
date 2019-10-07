import React from 'react'
import './Mobile.css'

import resume from './images/my_resume.pdf'
import resume_thumbnail from './images/resume_thumbnail.png'

class Mobile extends React.Component {
	render() {
		return (
			<div className='mobile-div'>
				<h1 className='mobile-paris'>Paris</h1>
				<h1 className='mobile-mongkolkul'>Mongkolkul</h1>
				<br />
				<br />

				<div className='resume-container-mobile'>
					<a href={resume} download='Paris Mongkolkul resume.pdf'>
						<img
							alt='resume_thumbnail'
							src={resume_thumbnail}
							className='resume-mobile'
						/>
						<br />
						<br />
						<button className='mobile-h1'> Download my resume !</button>
					</a>
				</div>
				<br />
				<br />

				<div className='mobile-text'>
					<h1 className='mobile-h2'>Please open me on a larger screen...</h1>
					<h1 className='mobile-h2'>
						I promise I'll fix this when I have more free time.
					</h1>
					<h1 className='mobile-h2'>:)</h1>
				</div>
			</div>
		)
	}
}

export default Mobile
