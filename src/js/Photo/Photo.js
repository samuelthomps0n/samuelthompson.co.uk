import React, { Component } from 'react';
import './Photo.css';
import ProgressiveImage from "react-progressive-image-loading";

class Photo extends Component {

	constructor(props) {
		super();
		let cloudinaryUrl = "https://res.cloudinary.com/samuel-thompson/image/upload/";

		this.state = {
			image: {
				blur: cloudinaryUrl + "c_scale,e_blur:823,q_59,w_100/" + props.hosted,
				small: cloudinaryUrl + "c_scale,q_60,w_500/" + props.hosted,
				retina: "./photos/large/" + props.local,
				fullsize: cloudinaryUrl + "c_scale,q_60,w_900/" + props.hosted,
				fullsizeretina: cloudinaryUrl + "c_scale,q_60,w_1800/" + props.hosted
			},
			portrait: props.portrait,
			handler: props.handler,
			index: props.index
		}
	}

	gridImageClass() {
		let defaultClasses = "grid__image i-image-thumbnail";

		if(this.state.portrait) {
			return defaultClasses + " grid__image--portrait";
		}
		return defaultClasses + " grid__image--landscape";
	}

	imageClass() {
		if(this.state.portrait) {
			return "loaded small-portrait";
		}
		return "loaded small-landscape";
	}

	toggle = () => {
		this.state.handler(this.state.index);
	}

	render() {
	return (
			<article 
			className={this.gridImageClass()} 
			data-small={this.state.image.small} 
			data-retina={this.state.image.retina}
			data-fullsize={this.state.image.fullsize}
			data-fullsize-retina={this.state.image.fullsizeretina}
			data-portrait={this.state.portrait}>
				<div className="grid__image-container">
					<a title="" className="grid__link" onClick={this.toggle}>
						<ProgressiveImage
								preview={this.state.image.blur}
								src={this.state.image.small}
								render={(src, style) => <img src={src} style={style} className={this.imageClass()} />}
						/>
					</a>
				</div>
			</article>
	);
	}
}

export default Photo;
