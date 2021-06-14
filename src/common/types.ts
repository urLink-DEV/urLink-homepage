export interface ContainerProps {
	padding?: string
	children: React.ReactNode
}
export interface ContainerWrapperProps {
	backgroundColor?: string
	children: React.ReactNode
}

export interface ButtonProps {
	type?: string
	color?: string
	backgroundColor?: string
	borderRadius?: string
	fixedWidth?: string
	name?: string
	imgSrc?: string
	children: React.ReactNode
	onClick?: () => void
}
export interface SvgIconProps {
	src: string
	width: string
	height: string
}
export interface PngImgProps {
	src: string
	width?: string
	height?: string
}
