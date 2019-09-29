import React from 'react'
import sertisLogo from './images/sertis_logo.png'
import tftLogo from './images/tft.png'
import sepLogo from './images/sep_logo.png'
import garenaLogo from './images/garena.png'

import './Work.css'

class Work extends React.Component {
	render() {
		return (
			<div>
				<div className='work-sertis'>
					<div className='work-title'>
						<img
							src={sertisLogo}
							className='big-logo'
							alt='sertis-logo'
							onClick={() =>
								window.open('https://www.sertiscorp.com', '_blank')
							}
						/>
						<h2 className='fullstack'>
							{' '}
							&nbsp;&nbsp; &nbsp;&nbsp;-> Full stack Developer Intern
						</h2>
						<h2 className='work-date'>
							&nbsp;&nbsp; &nbsp;&nbsp;July 2019 - September 2019
						</h2>
					</div>

					<div className='grid-container'>
						<div
							className='lax sub-grid-container-1'
							data-lax-preset='eager-150'
						>
							<h5>
								Diamonds &nbsp;
								<img
									src={tftLogo}
									className='small-logo'
									alt='tft-logo'
									onClick={() =>
										window.open(
											'http://diamonds.teachforthailand.org/page/home',
											'_blank'
										)
									}
								/>
							</h5>
							<p className='text-small'>
								Solely developed phase 2 of the web platform used by teachers to
								manage and generate exams using statistics-based algorithms.
								Implemented the question editor page using{' '}
								<span className='text-highlight'>
									<b> React & Vanilla js </b>
								</span>
								for frontend, and{' '}
								<span className='text-highlight'>
									<b>Node </b>
								</span>{' '}
								with{' '}
								<span className='text-highlight'>
									<b> Mongo and Redis dockers </b>
								</span>{' '}
								for backend.
							</p>
						</div>
						<div
							className='lax sub-grid-container-2'
							data-lax-preset='eager-150'
						>
							<h5>
								Fermi &nbsp;
								<img
									src={sepLogo}
									className='small-logo'
									alt='sep-logo'
									onClick={() =>
										window.open(
											'https://www.sertiscorp.com/blockchain?fbclid=IwAR1yzfCNGmx4mlu99KegvfyuWvD0PyvgzFCKo8wylPX1nETVvktlXp6fx4A',
											'_blank'
										)
									}
								/>
							</h5>
							<p className='text-small'>
								Studied and Refactored the Smart Contracts energy platform
								application, and wrote unit tests using{' '}
								<span className='text-highlight'>
									<b>Mocha framework and Chai js</b>
								</span>
								. Additionally, created my own blockchain voting system using
								<span className='text-highlight'>
									<b>Truffle Js</b>
								</span>
								.
							</p>
						</div>
						<div></div>
						<div
							className='lax sub-grid-container-3'
							data-lax-preset='eager-150'
						>
							<h5>Big Upload RESTful API</h5>
							<p className='text-small'>
								Implemented a{' '}
								<span className='text-highlight'>
									<b>Node</b>
								</span>{' '}
								API for uploading and storing big data to be used by the Data
								Science team. Further integrated authorization protocols with{' '}
								<span className='text-highlight'>
									<b> JWT and Passport Js </b>
								</span>{' '}
								with Google OAuth2.0 service.
							</p>
						</div>
					</div>
					<div className='work-garena'>
						<div className='work-title'>
							<img
								src={garenaLogo}
								className='big-logo'
								alt='sep-logo'
								onClick={() =>
									window.open(
										'https://www.sertiscorp.com/blockchain?fbclid=IwAR1yzfCNGmx4mlu99KegvfyuWvD0PyvgzFCKo8wylPX1nETVvktlXp6fx4A',
										'_blank'
									)
								}
							/>
							<h2 className='fullstack red'>
								{' '}
								&nbsp;&nbsp; &nbsp;&nbsp;-> Software Engineer Intern
								<br />
								<span className='work-date'>
									&nbsp;&nbsp; &nbsp;&nbsp;July 2017 - August 2017
								</span>
							</h2>
						</div>
						{/* <div
							className='lax garena-sub-container'
							data-lax-preset='eager-150'
						>
							<p className='text-small garena-text'>
								<h5>Garena HEADSHOT</h5>
								<ul>
									Systematically went through mobile games to scan for bugs and
									presented the result. Conducted a player based survey to
									analyze the in-game events to improve product marketing.
								</ul>
							</p>
						</div> */}
					</div>
				</div>
			</div>
		)
	}
}

export default Work
