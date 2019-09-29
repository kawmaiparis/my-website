import React from 'react'
import scrollToComponent from 'react-scroll-to-component'

class Menu extends React.Component {
	render() {
		return (
			<div className='Menu'>
				<h2
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
					onClick={() => {
						scrollToComponent(this.skills, {
							offset: 0,
							align: 'top',
							duration: 1800,
							ease: 'outBack'
						})
					}}
				>
					SKILLS<sup> 04</sup>
				</h2>
				<h2
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
		)
	}
}

export default Menu
