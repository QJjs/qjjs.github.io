import React from 'react'
import ReactDOM from 'react-dom'
import { MapContainer, MapConsumer, Marker, Popup, Polygon } from 'react-leaflet'
import L from 'leaflet'
import "./globals.css"

import FrostedGlass from './FrostedGlass'

const fullscreenStyle: React.CSSProperties = {
	width: "100%",
	height: "100%"
}

const uiContainerStyle: React.CSSProperties = {
	...fullscreenStyle,
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: 700,
	pointerEvents: "none"
}

const floatingUIContainerStyle: React.CSSProperties = {
	...fullscreenStyle,
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}

const App = () => (
	<div id="subroot" style={fullscreenStyle} >
		<MapContainer
			id="main"
			style={fullscreenStyle}
			center={[39, -95]}
			zoom={5}
			minZoom={5}
			maxZoom={10}
			// zoomDelta={0.1}
			// zoomSnap={0}
			maxBounds={[[25, -134], [50, -60]]}
			tap={L.Browser.mobile}>
			<MapConsumer>
				{(map) => {
					const defaultOptions: L.TileLayerOptions = { attribution: "©OpenStreetMap, ©CartoDB" }
					var darkNoLabels = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png", defaultOptions)
					var darkOnlyLabels = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png", defaultOptions)
					var lightNoLabels = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png", defaultOptions)
					var lightOnlyLabels = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png", defaultOptions)

					function manageColorTheme(darkMode: boolean) {
						if (darkMode) {
							darkNoLabels.addTo(map)
							darkOnlyLabels.addTo(map)
							lightNoLabels.remove()
							lightOnlyLabels.remove()
						} else {
							darkNoLabels.remove()
							darkOnlyLabels.remove()
							lightNoLabels.addTo(map)
							lightOnlyLabels.addTo(map)
						}
					}

					manageColorTheme(window.matchMedia("(prefers-color-scheme: dark)").matches)

					window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (ev) => {
						manageColorTheme(ev.matches)
					})

					return null
				}}
			</MapConsumer>
			<Marker draggable={false} position={[39, -95]}>
				<Popup>
					Hello!
				</Popup>
			</Marker>
			<Polygon positions={[
				[38, -95],
				[34, -90],
				[40, -90]
			]} pathOptions={{fillColor: "red"}}>
				<Popup closeButton={false}>
					<p>&emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non sollicitudin nisi, feugiat sollicitudin turpis. Morbi id consectetur justo. Maecenas eu leo metus. Etiam volutpat, nunc eget ornare consequat, elit quam sollicitudin dui, sed aliquet leo ex vitae lectus. Nam elementum ultrices odio sit amet vehicula. Cras volutpat sed justo non consequat. Cras volutpat sollicitudin enim at eleifend. Mauris ultrices velit eu magna lobortis, et lobortis ligula lobortis. Integer porta nisi a mauris finibus, quis vulputate ante ullamcorper. Nulla id eros sit amet nulla ultricies rhoncus id in velit. Etiam nec dui dignissim neque interdum pretium eu ac ipsum. Quisque quis auctor tortor.</p>

					<p>&emsp; Vivamus ut est vel odio semper viverra. Vivamus in dolor justo. Vivamus congue tincidunt viverra. Nulla non turpis quis risus aliquam gravida. Vivamus sed tortor laoreet, tincidunt lacus sed, ornare tortor. Quisque condimentum volutpat lectus. Suspendisse eu sollicitudin quam. Sed ac arcu quam. Ut tincidunt varius dolor quis hendrerit. Aliquam finibus, nisi in aliquam tincidunt, nunc massa volutpat metus, vel consequat mi ipsum vel libero. Vestibulum aliquet elit vel est vehicula, et blandit justo laoreet. Integer massa tellus, commodo et velit in, pretium egestas felis. Suspendisse eu nisi erat. Integer nec consectetur neque, vel varius lectus.</p>

					<p>&emsp; Sed sed ex eu nisi congue hendrerit. Nulla facilisi. Sed et orci quis erat elementum semper. Maecenas nec sagittis diam. Fusce dapibus laoreet turpis, at mollis elit scelerisque at. In dapibus, dui aliquet ullamcorper fringilla, quam ipsum pretium diam, ut congue sapien dui sit amet tellus. Nulla condimentum ullamcorper risus id ullamcorper. Vestibulum auctor hendrerit est. Nullam ac pretium tortor. Morbi interdum, leo quis viverra finibus, magna tellus euismod arcu, et suscipit nisl ligula nec massa. Sed vel dolor vel odio tristique ornare. Praesent aliquet mattis augue. Nam nisl dui, ultrices ultricies ex sit amet, viverra mattis odio.</p>

					<p>&emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum rhoncus libero at pulvinar. Nulla placerat id felis eget aliquet. Donec in finibus est, at fringilla metus. Aliquam id massa at sapien sodales commodo non vitae elit. Aenean fringilla tempus varius. Donec accumsan hendrerit orci, sit amet rutrum nibh commodo et. Quisque non massa non nisi aliquam cursus. Nam quam dui, mollis sed lorem sed, consectetur ornare orci. Integer volutpat quam mauris. Nulla feugiat, nunc sit amet malesuada pharetra, libero felis iaculis mauris, sit amet tempus justo erat a justo. Donec blandit, dolor nec egestas aliquam, massa massa malesuada nunc, ac congue mauris mauris non augue.</p>

					<p>&emsp; Donec sit amet libero lacus. Ut vehicula enim eu justo egestas lacinia. Mauris mi nunc, ornare sit amet augue tempus, varius accumsan ligula. In tortor massa, cursus eu mauris vitae, ullamcorper pulvinar tortor. Sed magna ex, accumsan vitae ipsum sed, malesuada euismod quam. Etiam vulputate nisl nec posuere dignissim. Cras cursus scelerisque leo, nec venenatis orci commodo at.</p>
				</Popup>
			</Polygon>
		</MapContainer>
		<div style={uiContainerStyle}>
			{/* <div style={floatingUIContainerStyle}>
			<FrostedGlass width={500} blurIntensity={10}>
				<p>&emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non sollicitudin nisi, feugiat sollicitudin turpis. Morbi id consectetur justo. Maecenas eu leo metus. Etiam volutpat, nunc eget ornare consequat, elit quam sollicitudin dui, sed aliquet leo ex vitae lectus. Nam elementum ultrices odio sit amet vehicula. Cras volutpat sed justo non consequat. Cras volutpat sollicitudin enim at eleifend. Mauris ultrices velit eu magna lobortis, et lobortis ligula lobortis. Integer porta nisi a mauris finibus, quis vulputate ante ullamcorper. Nulla id eros sit amet nulla ultricies rhoncus id in velit. Etiam nec dui dignissim neque interdum pretium eu ac ipsum. Quisque quis auctor tortor.</p>

				<p>&emsp; Vivamus ut est vel odio semper viverra. Vivamus in dolor justo. Vivamus congue tincidunt viverra. Nulla non turpis quis risus aliquam gravida. Vivamus sed tortor laoreet, tincidunt lacus sed, ornare tortor. Quisque condimentum volutpat lectus. Suspendisse eu sollicitudin quam. Sed ac arcu quam. Ut tincidunt varius dolor quis hendrerit. Aliquam finibus, nisi in aliquam tincidunt, nunc massa volutpat metus, vel consequat mi ipsum vel libero. Vestibulum aliquet elit vel est vehicula, et blandit justo laoreet. Integer massa tellus, commodo et velit in, pretium egestas felis. Suspendisse eu nisi erat. Integer nec consectetur neque, vel varius lectus.</p>

				<p>&emsp; Sed sed ex eu nisi congue hendrerit. Nulla facilisi. Sed et orci quis erat elementum semper. Maecenas nec sagittis diam. Fusce dapibus laoreet turpis, at mollis elit scelerisque at. In dapibus, dui aliquet ullamcorper fringilla, quam ipsum pretium diam, ut congue sapien dui sit amet tellus. Nulla condimentum ullamcorper risus id ullamcorper. Vestibulum auctor hendrerit est. Nullam ac pretium tortor. Morbi interdum, leo quis viverra finibus, magna tellus euismod arcu, et suscipit nisl ligula nec massa. Sed vel dolor vel odio tristique ornare. Praesent aliquet mattis augue. Nam nisl dui, ultrices ultricies ex sit amet, viverra mattis odio.</p>

				<p>&emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum rhoncus libero at pulvinar. Nulla placerat id felis eget aliquet. Donec in finibus est, at fringilla metus. Aliquam id massa at sapien sodales commodo non vitae elit. Aenean fringilla tempus varius. Donec accumsan hendrerit orci, sit amet rutrum nibh commodo et. Quisque non massa non nisi aliquam cursus. Nam quam dui, mollis sed lorem sed, consectetur ornare orci. Integer volutpat quam mauris. Nulla feugiat, nunc sit amet malesuada pharetra, libero felis iaculis mauris, sit amet tempus justo erat a justo. Donec blandit, dolor nec egestas aliquam, massa massa malesuada nunc, ac congue mauris mauris non augue.</p>

				<p>&emsp; Donec sit amet libero lacus. Ut vehicula enim eu justo egestas lacinia. Mauris mi nunc, ornare sit amet augue tempus, varius accumsan ligula. In tortor massa, cursus eu mauris vitae, ullamcorper pulvinar tortor. Sed magna ex, accumsan vitae ipsum sed, malesuada euismod quam. Etiam vulputate nisl nec posuere dignissim. Cras cursus scelerisque leo, nec venenatis orci commodo at.</p>
			</FrostedGlass>
			</div> */}
		</div>
	</div>
)

ReactDOM.render(
	<App />,
	document.getElementById("root")
)
