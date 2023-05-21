import {
	CharacterListItem,
	CharacterList,
	CharacterListViewWrapper,
} from "./CharacterListView.styled";
import { NavigateFunction } from "react-router-dom";

import { Button, Typography } from "@atoms";
import { Card } from "@organisms";

import type { CharacterList as CharacterListType } from "@pages/marvel/CharacterListPage";

type Props = {
	characterListData?: CharacterListType;
	navigate: NavigateFunction;
	fetchMoreCharacterList: () => void;
};

const CharacterListView = ({ characterListData, navigate, fetchMoreCharacterList }: Props) => (
	<CharacterListViewWrapper>
		<Typography color="#000000" textAlign="center" level={1} strong>
			Marvel Character List
		</Typography>
		<CharacterList>
			{characterListData?.results.map((character) => (
				<CharacterListItem key={character.id}>
					<Card
						onClick={() => navigate(`/character/${character.id}`)}
						title={character.name}
						description={
							character.description.length === 0
								? "No Description..."
								: character.description
						}
						imageSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
					/>
				</CharacterListItem>
			))}
		</CharacterList>
		<Button onClick={fetchMoreCharacterList}>More Data</Button>
	</CharacterListViewWrapper>
);

export default CharacterListView;
