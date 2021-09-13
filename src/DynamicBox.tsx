import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
	
}

type State = {
	expanded: boolean
	something: number
}

const s: React.CSSProperties = {
	background: "red"
}

export default class DynamicBox extends React.Component<Props, State> {
	state = {
		expanded: true,
		something: 0
	}

	render() {
		return <div style={s} onClick={() => this.setState({ expanded: !this.state.expanded })}>{this.state.expanded ? "expanded" : "closed"}</div>
	}
}