interface IProps {
  src: string
  width?: string
  height?: string
}

export const PngImg: React.FC<IProps> = ({ src, width, height }) => (
  <img src={`../../assets/img/png/${src}`} alt={src} width={width} height={height} />
)
