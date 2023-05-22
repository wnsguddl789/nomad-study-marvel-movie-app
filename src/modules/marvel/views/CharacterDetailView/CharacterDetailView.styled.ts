import styled from "@emotion/styled";

const CharacterDetailViewWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;

	.characterDetail__wrapper__info {
		display: flex;
		flex-direction: column;
		flex: 1;

		gap: 10px;

		position: relative;

		.background__image {
			position: absolute;
			z-index: 1;
			width: 100%;
			height: 100%;

			border-radius: 5px;

			opacity: 0.4;

			-webkit-user-drag: none;
			user-select: none;
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
		}
	}
`;
const CharacterDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	padding: 10px;

	position: relative;
	z-index: 100;

	flex: 1;

	.characterDetail__wrapper__header {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.characterDetail__wrapper__relatedList {
		display: flex;
		flex-direction: column;

		gap: 10px;
	}
`;

const CharacterRelatedList = styled.ul``;

const CharacterRelatedListItem = styled.li``;

export {
	CharacterDetailViewWrapper,
	CharacterDetailContainer,
	CharacterRelatedList,
	CharacterRelatedListItem,
};
