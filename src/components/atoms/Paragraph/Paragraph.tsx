import { StyledParagraph } from "./Paragraph.styled";

export type Props = {
	children: React.ReactNode;
	strong?: boolean;
	italic?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

export default function Paragraph({
	children,
	strong = false,
	italic = false,
	color = "#000000",
	...rest
}: Props) {
	return (
		<StyledParagraph strong={strong} italic={italic} color={color} {...rest}>
			{children}
		</StyledParagraph>
	);
}
