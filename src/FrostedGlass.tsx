import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
	width: number,
	blurIntensity?: number
}

type State = {
	
}

const defaultStyle: React.CSSProperties = {
	display: "block",
	background: "var(--frosted-background)",
	borderRadius: 6,
	pointerEvents: "all",
	height: "min-content",
	maxHeight: "50%",
	overflowY: "scroll",
	padding: "0px 40px",
	overflow: "clip",
	boxShadow: "0 0 1px 1px #fffa"
}

export default class FrostedGlass extends React.Component<Props, State> {
	state = { }

	render() {
		var calculatedStyle: React.CSSProperties =  {
			width: this.props.width,
			backdropFilter: `blur(${this.props.blurIntensity || 2}px)`,
			WebkitBackdropFilter: `blur(${this.props.blurIntensity || 2}px)`,
		}

		return (<div style={{...defaultStyle, ...calculatedStyle}}>{this.props.children}</div>);
	}
}
