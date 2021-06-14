import { PngImgProps } from "../types"

export const PngImg = ({ src, width, height }: PngImgProps) => (
	<img src={`/img/png/${src}`} alt={src} width={width} height={height} />
)
