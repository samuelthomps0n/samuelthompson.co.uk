import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ArrowKeysReact from 'arrow-keys-react';
import Photo from './Photo/Photo';
import Overlay from './Overlay/Overlay';
import './App.css';
import photoData from '../data/homepage.json';

class App extends Component {

	constructor() {
		super();
		this.state = {
			overlayVisible: false,
			activeImage: 0,
			photos: photoData
		}

		ArrowKeysReact.config({
			left: () => {
				if(this.state.activeImage > 0) {
					let previousImage = this.state.activeImage - 1;
					this.setState({
						activeImage: previousImage
					});
				}
			},
			right: () => {
				if(this.state.activeImage < this.state.photos.length -1) {
					let previousImage = this.state.activeImage + 1;
					this.setState({
						activeImage: previousImage
					});
				}
			}
		});
	}

	changeOverlay = (photoIndex) => {
		let status = !this.state.overlayVisible;
		this.setState({
			overlayVisible: status,
			activeImage: photoIndex,
		});
	}

	isOverlayVisible = () => {
		if(this.state.overlayVisible) {
			return "image-overlay visible";
		}
		return "image-overlay";
	}

	render() {
		return (
			<BrowserRouter>
				<div>

					<header className="page__header">
						<h1 className="identity identity--split">Samuel Thompson</h1>
						<nav className="menu">
							<ul>
								<li className="menu__item">
									<NavLink exact to='/' className="menu__link" activeClassName="menu__link--active">Home</NavLink>
								</li>
								<li className="menu__item">
									<NavLink to='/about' className="menu__link" activeClassName="menu__link--active">About</NavLink>
								</li>
								<li className="menu__item">
									<NavLink to='/contact' className="menu__link" activeClassName="menu__link--active">Contact</NavLink>
								</li>
							</ul>
						</nav>
					</header>

					<Switch>
						<Route exact path='/'>
							<div className="no-focus" {...ArrowKeysReact.events} tabIndex="1">
								<main className="page__content">
									<section className="grid">
										{this.state.photos.map((photo, index) => {
											return <Photo key={index.toString()} hosted={photo.url} portrait={photo.portrait} index={index} handler={this.changeOverlay} />;
										}, this)}
									</section>
								</main>

								<section className={this.isOverlayVisible()}>
									{this.state.overlayVisible && <Overlay image={this.state.photos[this.state.activeImage]} visible={this.state.overlayVisible} handler={this.changeOverlay} />}
								</section>
							</div>
						</Route>
						<Route path='/about'>
							<main class="page__content">
								<h1 class="heading heading--tertiary">About</h1>
								<p class="text">Samuel Thompson is a landscape and lifestyle photographer living in Somerset, UK</p>
								<p class="text">-</p>

								<p class="text">Came here looking for a contract web developer? Lots of the work I undertake is for leading UK agencies and as such can't be displayed online. Feel free to email me on <a href="mailto:sam@samuelthompson.co.uk" title="Email me for a portfolio" class="link">sam@samuelthompson.co.uk</a> and I can send over a portfolio of work.</p>

								<p class="text"><a href="https://github.com/samuelthomps0n" title="View my GitHub.com profile" class="link">- Github.com</a></p>
								<p class="text"><a href="https://www.npmjs.com/~samuelthomps0n" title="View my NPMJS packages" class="link">- NPM</a></p>
								<p class="text"><a href="http://linkedin.com/in/samuelthomps0n/" title="View my LinkedIn profile" class="link">- LinkedIn</a></p>

								<p class="text"></p>

								<p class="text text--small">&copy; Samuel Thompson Corporate Ltd. Registered in England & Wales 8053244 - Registered Office: Palladium House, 1-4 Argyll Street, London, W1F 7LD</p>
							</main>
						</Route>
						<Route path="/contact">
							<main class="page__content">
								<h1 class="heading heading--tertiary">Contact</h1>
								<p class="text">t. 01278 630 898</p>
								<p class="text">m. 07853 242 138</p>
								<p class="text">e. <a href="mailto:sam@samuelthompson.co.uk" title="Email me" class="link">sam@samuelthompson.co.uk</a></p>

								<p class="text">-</p>

								<p class="text text--small">&copy; Samuel Thompson Corporate Ltd. Registered in England & Wales 8053244 - Registered Office: Palladium House, 1-4 Argyll Street, London, W1F 7LD</p>
							</main>
						</Route>
					</Switch> 
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
