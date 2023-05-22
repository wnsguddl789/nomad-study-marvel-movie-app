import { forwardRef, ForwardedRef } from "react";
import { NavigateFunction } from "react-router-dom";

import {
	CharacterListItem,
	CharacterList,
	CharacterListViewWrapper,
} from "./CharacterListView.styled";

import { Button, Typography } from "@atoms";
import { Card } from "@organisms";

import type { CharacterListType } from "@marvel/types/CharacterList.type";

type Props = {
	characterListData?: CharacterListType;
	navigate: NavigateFunction;
	fetchMoreCharacterList: () => void;
};

const CharacterListView = forwardRef(
	(
		{ characterListData, navigate, fetchMoreCharacterList }: Props,
		ref: ForwardedRef<HTMLUListElement>
	) => (
		<CharacterListViewWrapper>
			<Typography color="#000000" textAlign="center" level={1} strong>
				Marvel Character List
			</Typography>
			<CharacterList ref={ref}>
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
	)
);

export default CharacterListView;
