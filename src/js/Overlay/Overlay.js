import React, { Component } from 'react';
import './Overlay.css';
import ProgressiveImage from "react-progressive-image-loading";

const cloudinaryUrl = "https://res.cloudinary.com/samuel-thompson/image/upload/";

class Overlay extends Component {

	constructor(props) {
		super();

		this.state = {
			visible: false,
			portrait: props.portrait,
			handler: props.handler,
			small: cloudinaryUrl + "c_scale,q_60,w_500/" + props.image,
			image: cloudinaryUrl + "c_scale,q_60,w_1800/" + props.image
		};
	}

	contentClass() {
		let defaultClass = "image-overlay__content";

		if(this.state.portrait) {
			return defaultClass + " image-overlay__content--portrait";
		}
		return defaultClass + " image-overlay__content--landscape";
	}

	toggle = () => {
		this.state.handler(0);
	}

	render() {
		return (
			<section className="image-overlay__container">
				<span className="image-overlay__close" onClick={this.toggle}>[x]</span>
				<div className={this.contentClass()}>
					<ProgressiveImage
						preview={this.state.small}
						src={this.state.image}
						render={(src, style) => <img src={src} style={style} className="image-overlay__image" />}
					/>
					<p className="image-overlay__caption"></p>
				</div>
			</section>
		);
	}
}

export default Overlay;
