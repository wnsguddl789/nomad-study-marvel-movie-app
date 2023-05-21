import React from "react";

import { StyledTypography } from "./Typography.styled";
import type { TextAlign } from "./Typography.type";

export type Props = {
	children: React.ReactNode;
	textAlign?: TextAlign;
	strong?: boolean;
	italic?: boolean;
	level?: 1 | 2 | 3 | 4 | 5;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function Typography({
	children,
	textAlign = "start",
	strong = false,
	italic = false,
	level = 1,
	color = "#000000",
	...rest
}: Props) {
	return (
		<StyledTypography
			textAlign={textAlign}
			strong={strong}
			italic={italic}
			level={level}
			color={color}
			{...rest}
		>
			{children}
		</StyledTypography>
	);
}
