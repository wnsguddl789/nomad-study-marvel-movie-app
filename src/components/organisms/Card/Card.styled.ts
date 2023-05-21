import styled from "@emotion/styled";

export const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 6px;

	cursor: pointer;

	border: 1px solid #e5e5e5;
	border-radius: 20px;

	.card__image-wrapper {
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		position: relative;
		overflow: hidden;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card__info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 20px;
		gap: 6px;

		.card__info__header {
			size: 20px;
			font-weight: 700;
			font-size: 14px;
			line-height: 18px;
		}

		.card__info__body {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 0px;
			gap: 8px;

			p {
				font-weight: 400;
				font-size: 14px;
				line-height: 18px;
			}
		}
	}
`;
