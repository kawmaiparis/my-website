import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import './Skills.css'

const Sidebar = posed.ul({
	open: {
		x: '0%',
		delayChildren: 200,
		staggerChildren: 300
	},
	closed: { x: '-100%', delay: 100 }
})
const SidebarB = posed.ul({
	open: {
		x: '0%',
		delayChildren: 2200,
		staggerChildren: 500
	},
	closed: { x: '-100%', delay: 800 }
})
const SidebarC = posed.ul({
	open: {
		x: '0%',
		delayChildren: 5000,
		staggerChildren: 700
	},
	closed: { x: '-100%', delay: 2000 }
})

const Item = posed.li({
	open: { y: 0, opacity: 1 },
	closed: { y: 20, opacity: 0 },
	hoverable: true,
	init: { scale: 1 },
	hover: { scale: 1.2 },
	pressable: true,
	press: { scale: 0.8 }
})

const Item2 = posed.li({
	// You can make a custom transition for the flip-powered
	// shuffling animation by overriding `flip`. You can even
	// add other properties to animate while the flip animation
	// is in progress. Uncomment the following code to try it out!
	flip: {
		scale: 1,
		transition: {
			default: {
				type: 'spring'
			}
		}
	},
	// hoverable: true,
	init: { scale: 1 }
	// hover: { scale: 0.8 }
})

class Skills extends React.Component {
	state = {
		isOpen: false,
		items: [
			'Node & React',
			'Unit Testing: Mocha & Chai',
			'Unit Testing: JUnit',
			'GCP',
			'AWS',
			'Digital Ocean',
			'Heroku',
			'Kubernetes',
			'Docker',
			'CI/CD',
			'Postgresql',
			'MySql',
			'Mongo',
			'OAuth2.0',
			'JWT',
			'NGINX',
			'Git',
			'Linux',
			'Android development',
			'Latex'
		]
	}

	shuffle = array => {
		let currentIndex = array.length
		let temporaryValue
		let randomIndex = 0
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1

			// And swap it with the current element.
			temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}
		return array
	}

	componentDidMount() {
		setTimeout(this.toggle, 1000)
		setInterval(() => {
			this.setState({
				items: this.shuffle(this.state.items)
			})
		}, 4000)
	}

	toggle = () => this.setState({ isOpen: !this.state.isOpen })

	render() {
		const { isOpen } = this.state
		const { items } = this.state

		return (
			<div className='big-container'>
				<div className='container'>
					<Sidebar className='sidebar' pose={isOpen ? 'open' : 'closed'}>
						<Item className='title'>
							<h2>advanced</h2>
						</Item>
						<br />
						<Item className='item A'>C</Item>
						<Item className='item A'>Java</Item>
						<Item className='item A'>JavaScript</Item>
						<Item className='item A'>HTML & CSS</Item>
					</Sidebar>
					<SidebarB className='sidebarB' pose={isOpen ? 'open' : 'closed'}>
						<Item className='title'>
							<h2>intermediate</h2>
						</Item>
						<br />

						<Item className='item B'>Python</Item>
						<Item className='item B'>C++</Item>
						<Item className='item B'>Haskell</Item>
						<Item className='item B'>Prolog</Item>
					</SidebarB>
					<SidebarC className='sidebarC' pose={isOpen ? 'open' : 'closed'}>
						<Item className='title'>
							<h2>beginner</h2>
						</Item>
						<br />

						<Item className='item C'>Elixir</Item>
						<Item className='item C'>Go</Item>
						<Item className='item C'>Solidity</Item>
						<Item className='item C'></Item>
					</SidebarC>
				</div>
				<div className='other-skills'>
					<ul>
						<PoseGroup>
							{items.map((id, i) => (
								<Item2 key={id} className='other-skills-box'>
									{this.state.items[i]}
								</Item2>
							))}
						</PoseGroup>
					</ul>
				</div>
			</div>
		)
	}
}

export default Skills
