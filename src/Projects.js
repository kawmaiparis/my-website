import React from 'react'
import githubLogo from './images/github-logo.png'
import webLogo from './images/web_logo.png'
import posed from 'react-pose'
import ScrollReveal from 'scrollreveal'

import './Projects.css'

const Item = posed.li({
	open: { y: 0, opacity: 1 },
	closed: { y: 20, opacity: 0 },
	hoverable: true,
	init: { scale: 1 },
	hover: { scale: 1.2 },
	pressable: true,
	press: { scale: 0.8 }
})

class Projects extends React.Component {
	componentDidMount() {
		ScrollReveal().reveal('.project.A', {
			duration: 2000,
			distance: '200px',
			opacity: 0
		})
		ScrollReveal().reveal('.project.B', {
			duration: 3000,
			distance: '200px',
			opacity: 0
		})
		ScrollReveal().reveal('.project.C', {
			duration: 4000,
			distance: '200px',
			opacity: 0
		})
	}
	render() {
		return (
			<div className='project-container'>
				<div className='project A'>
					<h1>Truffle Voting</h1>
					<p>
						Javascript · Blockchain & ETH Smart Contract · Node & Truffle Js ·
						Metamask{' '}
					</p>
					<Item
						className='item3 redA'
						pose='open'
						onClick={() => {
							window.open(
								'https://github.com/kawmaiparis/sertis-election-truffle',
								'_blank'
							)
						}}
					>
						<img className='github_logo' src={githubLogo} alt='github logo' />
						Click for Code
					</Item>
				</div>
				<div className='project B'>
					<h1>Obeo</h1>
					<p>Java · Android · AWS Pipeline EC2 RDS S3 · Google Maps · Mesibo</p>
					<Item
						className='item3 redB'
						pose='open'
						onClick={() => {
							window.open('https://github.com/kawmaiparis/Obeo', '_blank')
						}}
					>
						<img className='github_logo' src={githubLogo} alt='github logo' />
						Click for Code
					</Item>
				</div>
				<div className='project C'>
					<h1>Thai Soc</h1>
					<p>
						Javascript · Web · React & Node Js · Nginx · GCP Compute Engine{' '}
					</p>
					<div className='two-buttons'>
						<Item
							className='item3 redC'
							pose='open'
							onClick={() => {
								window.open(
									'https://github.com/kawmaiparis/sertis-thaisoc',
									'_blank'
								)
							}}
						>
							<img className='github_logo' src={githubLogo} alt='github logo' />
							Click for Code
						</Item>
						<Item
							className='item3 redD'
							pose='open'
							onClick={() => {
								window.open('http://35.186.152.253/', '_blank')
							}}
						>
							<img className='github_logo' src={webLogo} alt='github logo' />
							Live Preview
						</Item>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects
