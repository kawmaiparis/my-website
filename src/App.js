import React from 'react'
import lax from 'lax.js'
import scrollToComponent from 'react-scroll-to-component'
import ScrollReveal from 'scrollreveal'
import Typed from 'typed.js'
// import Type from './Type.js'

import './App.css'
import './Scrollbar.css'
import Work from './Work.js'
import Skills from './Skills.js'
import Projects from './Projects.js'

import thaiSocLogo from './images/thaisoc.png'
import resume from './images/my_resume.pdf'
import resume_thumbnail from './images/resume_thumbnail.png'

class App extends React.Component {
	changeMenuTextColor = color => {
		document.getElementById('myintro').style.color = color
		document.getElementById('myexperience').style.color = color
		document.getElementById('myprojects').style.color = color
		document.getElementById('myothers').style.color = color
		document.getElementById('mycontact').style.color = color
	}
	componentDidMount() {
		// lax Js

		lax.setup()
		window.addEventListener('resize', () => {
			const width = window.innerWidth
			const height = window.innerHeight
			if (width < 1580 || height < 826) {
			}
			lax.updateElements()
			// console.log('I will fix this I promise :(')
		})

		// type Js
		let options = {
			strings: [
				'Send me an <b>email</b>. ^1000',
				'Connect with me on <b>Linkedin</b>. ^1000',
				'Look at my work on <b>Github</b>. ^1000',
				'Check me up on <b>Facebook</b>. ^1000',
				'Check me out on <b>Instagram</b>. ^1000'
				// 'Send me <b>nud</b>'
			],
			typeSpeed: 40,
			backSpeed: 50,
			smartBackspace: true,
			loop: true,
			cursorChar: '_'
		}
		var typed = new Typed('.typing-contact', options)
		const me = document.querySelector('.me')

		document.addEventListener('scroll', x => {
			const offset = this.about.offsetTop - window.scrollY
			// console.log(offset)

			// for Background color change
			if (window.scrollY >= 2000 && window.scrollY < 3000) {
				document.querySelector('.work-title').classList.add('text-blue')
				document.body.classList.add('background-navy')
			} else {
				document.querySelector('.work-title').classList.remove('text-blue')
				document.body.classList.remove('background-navy')
			}

			// for Menu color change
			if (window.scrollY >= 600 && window.scrollY < 1900) {
				document.getElementById('myintro').style.fontSize = '30px'
			} else {
				document.getElementById('myintro').style.fontSize = '18px'
			}
			if (window.scrollY >= 1900 && window.scrollY < 4200) {
				document.getElementById('myexperience').style.fontSize = '30px'
			} else {
				document.getElementById('myexperience').style.fontSize = '18px'
			}
			if (window.scrollY >= 4200 && window.scrollY < 6100) {
				document.getElementById('myprojects').style.fontSize = '30px'
			} else {
				document.getElementById('myprojects').style.fontSize = '18px'
			}
			if (window.scrollY >= 6100 && window.scrollY < 6800) {
				document.getElementById('myothers').style.fontSize = '30px'
			} else {
				document.getElementById('myothers').style.fontSize = '18px'
			}
			if (window.scrollY >= 6800) {
				document.getElementById('mycontact').style.fontSize = '30px'
			} else {
				document.getElementById('mycontact').style.fontSize = '18px'
			}

			if (offset > 800) {
				me.innerHTML = '<p>a Software Engineer.</p>'
			} else if (offset > 700) {
				me.innerHTML =
					'<p  style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color: rgb(243, 238, 229);">someone.</p>'
			} else if (offset > 600) {
				me.innerHTML =
					'<p><span style="font-family: Vibes; font-size: 70px;">THAI.</span></p>'
			} else if (offset > 500) {
				me.innerHTML =
					'<p><span style="font-family: Vibes; font-size: 70px;">THAI</span> & <span style="font-family: Big Shoulder Texts; font-weight: bold; font-size: 60px; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color: rgb(243, 238, 229);" >British.</span></p>'
			} else if (offset > 400) {
				me.innerHTML = '<p style="font-size: 30px;">not Batman.</p>'
			} else if (offset > 300) {
				me.innerHTML = '<p style="font-family: Mansalva;">MOTIVATED.</p>'
			} else if (offset > 200) {
				me.innerHTML = '<p>hungry.</p>'
			} else if (offset > 100) {
				me.innerHTML =
					'<p style="font-size: 30px; letter-spacing: 0.5em;"> sarcarstic.</p>'
			} else if (offset > 0) {
				me.innerHTML =
					'<p style="font-weight: bold; font-size: 50px;">Paris.</p>'
			}
			lax.update(window.scrollY)
		})

		// ScrollReveal Js

		ScrollReveal().reveal('.description-reveal', {
			delay: 1000,
			duration: 1200,
			distance: '200px',
			opacity: 0
		})
		ScrollReveal().reveal('.others-container', {
			duration: 2000,
			origin: 'left',
			distance: '200px',
			opacity: 0
		})
		ScrollReveal().reveal('.footer', {
			duration: 3000,
			scale: 0.85,
			opacity: 0
		})
		ScrollReveal().reveal('.resume-big-container', {
			delay: 2000,
			duration: 1000,
			scale: 0.85,
			opacity: 0
		})
	}

	// For hyperlink buttons
	openLink = link => {
		console.log('hello')
		window.open(link, '_blank')
	}

	render() {
		console.log('hoe')
		return (
			<div className='App'>
				<div className='Menu'>
					<h2
						id='myintro'
						className='menu-intro'
						onClick={() => {
							scrollToComponent(this.intro, {
								offset: 0,
								align: 'top',
								duration: 1800,
								ease: 'outQuad'
							})
						}}
					>
						INTRO<sup> 01</sup>
					</h2>
					<h2
						id='myexperience'
						onClick={() => {
							scrollToComponent(this.experience, {
								offset: 0,
								align: 'top',
								duration: 1500,
								ease: 'outBack'
							})
						}}
					>
						EXPERIENCE<sup> 02</sup>
					</h2>
					<h2
						id='myprojects'
						onClick={() => {
							scrollToComponent(this.projects, {
								offset: 0,
								align: 'top',
								duration: 1500,
								ease: 'outBack'
							})
						}}
					>
						PROJECTS<sup> 03</sup>
					</h2>
					<h2
						id='myothers'
						onClick={() => {
							scrollToComponent(this.skills, {
								offset: 0,
								align: 'top',
								duration: 1800,
								ease: 'outBack'
							})
						}}
					>
						OTHERS<sup> 04</sup>
					</h2>
					<h2
						id='mycontact'
						onClick={() => {
							scrollToComponent(this.contact, {
								offset: 0,
								align: 'top',
								duration: 1800,
								ease: 'outQuint'
							})
						}}
					>
						CONTACT<sup> 05</sup>
					</h2>
				</div>
				<section
					ref={section => {
						this.intro = section
					}}
				>
					<h2 className='sd'>SOFTWARE ENGINEER.</h2>
					<h1 className='paris lax' data-lax-preset='rightToLeft-0.5'>
						PARIS
					</h1>
					<h1 className='mongkolkul lax' data-lax-preset='leftToRight-0.5'>
						MONGKOLKUL
					</h1>
				</section>
				<section className='divider-small'></section>
				<section
					className='intro'
					ref={section => {
						this.about = section
					}}
				>
					<div className='header right'>
						<h2 className='index'>01</h2>
						<h3>WHO AM I?</h3>
					</div>
					<div className='description-container'>
						<p
							className='me lax'
							data-lax-translate-y='0 0, 300 10, 1000 275  | speed=1'
						>
							Paris.
						</p>
						<div className='description'>
							<p>Hi. I'm </p>
							<br />
							<br />
							<p className='description-reveal'>
								A final year Computing student at Imperial College London based
								in, well, London. I still can't decide between frontend,
								backend, and 150 other specialized job titles. So I'm currently
								open to any exciting and challenging opportunities anyone has to
								offer.
							</p>
						</div>
					</div>
					<div className='resume-big-container'>
						<div id='outer-orbit'></div>

						<div className='resume-container'>
							<a href={resume} download='Paris Mongkolkul resume.pdf'>
								<img
									alt='resume_thumbnail'
									src={resume_thumbnail}
									className='resume'
								/>
								<h2 className='resume-text'> SEE MY RESUME !</h2>
							</a>
						</div>
					</div>
				</section>
				<section
					className='section-work'
					ref={section => {
						this.experience = section
					}}
				>
					<div
						className='side-container-right lax'
						data-lax-preset='eager-1000'
					>
						<h1 className='side'>WORK.</h1>
					</div>

					<div className='header left'>
						<h3>EXPERIENCE</h3>
						<h2 className='index'>02</h2>
					</div>
					<div>
						<Work />
					</div>
				</section>
				<section className='section-skills'>
					<div className='side-container-left lax' data-lax-preset='eager-500'>
						<h1 className='side'>SKILLS.</h1>
					</div>
					<h1 className='lax programming' data-lax-preset='rightToLeft-0.5'>
						PROGRAMMING
					</h1>
					<div className='skills'>
						<Skills />
					</div>
				</section>
				<section
					className='projects'
					ref={section => {
						this.projects = section
					}}
				>
					<div className='header right'>
						<h3>PROJECTS</h3>
						<h2 className='index'>03</h2>
					</div>
					<Projects />
				</section>
				<section
					className='others'
					ref={section => {
						this.skills = section
					}}
				>
					<div className='header left'>
						<h2 className='index'>04</h2>
						<h3>WHAT ELSE?</h3>
					</div>
					<div className='others-container'>
						<h2>Imperial College Thai Society</h2>
						<br />

						<p>
							<span className='others-title A'>President</span> 2019-present
						</p>
						<p>
							<span className='others-title B'>
								Event Coordinator / Screenwriter / Actor
							</span>{' '}
							2017-2019
						</p>
						<br />
						<br />
						<br />
						<br />
						<br />
						<h2>Harrow International School Bangkok </h2>
						<br />

						<p>
							<span className='others-title C'>House Captain</span> 2016-2017
						</p>
						<p>
							<span className='others-title D'>Charity Project Leader</span>{' '}
							2015-2016
						</p>
					</div>
					<div className='thaisoc-logo-container'>
						<img
							src={thaiSocLogo}
							className='thaisoc-logo'
							alt='thaiSoc-logo'
							onClick={() =>
								this.openLink(
									'https://www.facebook.com/groups/139633776127649/'
								)
							}
						/>
					</div>
				</section>
				<section
					className='contacts'
					ref={section => {
						this.contact = section
					}}
				>
					<div className='header right'>
						<h3>WANNA GET IN TOUCH?</h3>
						<h2 className='index'>05</h2>
					</div>
					<div className='email'>
						<h2>
							<span className='typing-contact'></span>
						</h2>
					</div>
				</section>
				<section className='footer'>
					{/* open email on CLick */}
					<div>
						<a href='mailto:paris.kawmai@gmail.com'>
							<p>EMAIL</p>
						</a>
					</div>
					<div
						onClick={() =>
							this.openLink(
								'https://www.linkedin.com/in/paris-mongkolkul/linkedin.com'
							)
						}
					>
						<p>LINKEDIN</p>
					</div>
					<div onClick={() => this.openLink('https://github.com/kawmaiparis')}>
						<p>GITHUB</p>
					</div>
					<div
						onClick={() =>
							this.openLink('https://www.facebook.com/kawmai.mongkolkul')
						}
					>
						<p>FACEBOOK</p>
					</div>
					<div
						onClick={() =>
							this.openLink('https://www.instagram.com/kawmaiparis/')
						}
					>
						<p>INSTAGRAM</p>
					</div>
				</section>
			</div>
		)
	}
}

export default App
