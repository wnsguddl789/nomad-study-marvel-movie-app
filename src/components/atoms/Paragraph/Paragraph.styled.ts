import styled from "@emotion/styled";

import type { Props } from "./Paragraph";

export const StyledParagraph = styled.p<Props>`
	font-weight: ${({ strong }) => (strong ? 700 : 500)};
	color: ${({ color }) => color};
`;
