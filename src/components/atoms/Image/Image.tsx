import { StyledImage } from "./Image.styled";

export type Props = {
	src: string;
} & React.HTMLAttributes<HTMLImageElement>;

const Image = ({ src, ...rest }: Props) => <StyledImage src={src} {...rest} />;

export default Image;
