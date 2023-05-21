import { StyledButton } from "./Button.styled";

import type { ButtonVariant } from "./Button.type";

export type Props = {
	variant?: ButtonVariant;
	children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant = "primary", children, ...rest }: Props) {
	return (
		<StyledButton variant={variant} {...rest}>
			{children}
		</StyledButton>
	);
}
