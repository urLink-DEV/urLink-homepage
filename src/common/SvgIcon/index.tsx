interface IProps {
	src: string
	width: string
	height: string
}

export const SvgIcon: React.FC<IProps> = ({ src, width, height }) => (
	<img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
)
