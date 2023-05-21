import { Typography, Image } from "@atoms";

import { StyledCard } from "./Card.styled";

type Props = {
	imageSrc: string;
	description: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ imageSrc, title, description, ...rest }: Props) {
	return (
		<StyledCard {...rest}>
			<div className="card__image-wrapper">
				<Image src={imageSrc} />
			</div>
			<div className="card__info">
				<div className="card__info__header">
					<Typography>{title}</Typography>
				</div>

				<div className="card__info__body">
					<Typography>{description}</Typography>
				</div>
			</div>
		</StyledCard>
	);
}
