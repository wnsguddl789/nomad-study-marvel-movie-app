import styled from "@emotion/styled";

import type { Props } from "./Typography";

export const StyledTypography = styled.p<Props>`
	text-align: ${({ textAlign }) => textAlign};
	font-size: ${({ level }) => getFontSize(level)};
	font-weight: ${({ strong }) => (strong ? 700 : 500)};
	color: ${({ color }) => color};
`;

const getFontSize = (level?: number) => {
	switch (level) {
		case 1:
			return "2em";

		case 2:
			return "1.5em";

		case 3:
			return "1.17em";

		case 4:
			return "1em";

		case 5:
			return "0.83em";
	}
};
