import React, { Component } from 'react';
import './Overlay.css';
import ProgressiveImage from "react-progressive-image-loading";

const cloudinaryUrl = "https://res.cloudinary.com/samuel-thompson/image/upload/";

class Overlay extends Component {

	constructor(props) {
		super();
		this.state = {
			handler: props.handler,
			image: props.image,
			imageLoading: true
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
		this.setState({
			imageLoading: true
		});
	}

	contentClass() {
		let defaultClass = "image-overlay__content";

		if(this.state.image.portrait) {
			return defaultClass + " image-overlay__content--portrait";
		}
		return defaultClass + " image-overlay__content--landscape";
	}

	handleImageLoaded() {
		this.setState({
			imageLoading: false
		});
	}

	toggle = () => {
		this.state.handler(0);
	}

	scaleFromCloundinary(width, url) {
		return cloudinaryUrl + "c_scale,q_60,w_" + width + "/" + url;
	}

	imageHasLoaded() {
		if(!this.state.imageLoading) {
			return 'loaded';
		}
		return 'loading';
	}

	render() {
		const loading = this.state.imageLoading;

		return (
			<section className="image-overlay__container">
				<span className="image-overlay__close" onClick={this.toggle}>[x]</span>
				<div className={this.contentClass()}>

					<img src={this.scaleFromCloundinary(1800, this.state.image.url)} onLoad={this.handleImageLoaded.bind(this)} className={this.imageHasLoaded()} />
					
					<p className="image-overlay__caption"></p>
				</div>
			</section>
		);
	}
}

export default Overlay;
