import styled from "@emotion/styled";

import type { Props } from "./Button";

const BUTTON_COLOR = {
	primary: { default: "#FF5600", hover: "#F63105", textColor: "#FFFFFF" },
	secondary: { default: "#000000", hover: "#3A3A3A", textColor: "#FFFFFF" },
	tertiary: { default: "#F8F8F8", hover: "#EFEFEF", textColor: "#FFFFFF" },
	outline: { default: "#FF5600", hover: "#F63105", textColor: "#FFFFFF" },
};

export const StyledButton = styled.button<Props>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 8px 12px;

	border: 0;
	outline: none;
	cursor: pointer;

	background-color: ${({ variant }) => BUTTON_COLOR[variant || "primary"].default};
	color: ${({ variant }) => BUTTON_COLOR[variant || "primary"].textColor};
	border-radius: 2px;

	&:hover {
		background-color: ${({ variant }) => BUTTON_COLOR[variant || "primary"].hover};
	}
`;
