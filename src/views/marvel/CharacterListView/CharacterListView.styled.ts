import styled from "@emotion/styled";

const CharacterListViewWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const CharacterList = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 10px;
`;
const CharacterListItem = styled.li``;

export { CharacterListViewWrapper, CharacterList, CharacterListItem };
