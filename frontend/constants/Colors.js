export default Colors = {
	// background colors
	background: "#fefcfb",
	tintedBackground: "#f8ece7", // "rgba(247,234,229,0.9)"
	// text colors
	text: "#5c504f",
	textPlaceholder: "#a3928f",
	accent: "#33576e",
	// UI colors
	ui: "#e46866",
	activeUI: "#db5957",
	inactiveUI: "#997975",
	success: "#4c8f74",
	error: "#db1d30",
	border: "#e3beb5",
}

export const DefaultTheme = {
	dark: false,
	colors: {
		primary: Colors.ui, // doesn't seem to be used anywhere?
		background: Colors.background,
		card: Colors.background, // background for tab bar
		text: Colors.text,
		border: Colors.background, // border color for tab bar
	},
}
