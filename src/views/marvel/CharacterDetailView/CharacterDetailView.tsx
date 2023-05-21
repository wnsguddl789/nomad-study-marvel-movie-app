import React from "react";

import {
	CharacterDetailViewWrapper,
	CharacterDetailContainer,
	CharacterRelatedList,
	CharacterRelatedListItem,
} from "./CharacterDetailView.styled";

import { Typography, Paragraph, Button, Image } from "@atoms";

import type { Character } from "@types";

type Props = {
	characterDetailData?: Character;
	navigateToCharacterListPage: () => void;
};

const CharacterDetailView = ({ characterDetailData, navigateToCharacterListPage }: Props) => (
	<CharacterDetailViewWrapper>
		<Typography textAlign="center" strong>
			Marvel Character Detail
		</Typography>

		{characterDetailData && (
			<React.Fragment>
				<div className="characterDetail__wrapper__info">
					<CharacterDetailContainer>
						<div className="characterDetail__wrapper__header">
							<Typography level={1} strong>
								{characterDetailData.name}
							</Typography>
							<Paragraph>
								{characterDetailData.description.length === 0
									? "No Description..."
									: characterDetailData.description}
							</Paragraph>
						</div>

						<div className="characterDetail__wrapper__relatedList">
							<CharacterRelatedList>
								<Typography level={2} strong>
									Comics
								</Typography>
								{characterDetailData.comics.items.map((comic, index) => (
									<CharacterRelatedListItem key={`${comic.name}-${index}`}>
										{comic.name}
									</CharacterRelatedListItem>
								))}
							</CharacterRelatedList>

							<CharacterRelatedList>
								<Typography level={2} strong>
									Events
								</Typography>
								{characterDetailData.events.items.map((event, index) => (
									<CharacterRelatedListItem key={`${event.name}-${index}`}>
										{event.name}
									</CharacterRelatedListItem>
								))}
							</CharacterRelatedList>

							<CharacterRelatedList>
								<Typography level={2} strong>
									Series
								</Typography>
								{characterDetailData.series.items.map((series, index) => (
									<CharacterRelatedListItem key={`${series.name}-${index}`}>
										{series.name}
									</CharacterRelatedListItem>
								))}
							</CharacterRelatedList>

							<CharacterRelatedList>
								<Typography level={2} strong>
									Stories
								</Typography>
								{characterDetailData.stories.items.map((story, index) => (
									<CharacterRelatedListItem key={`${story.name}-${index}`}>
										{story.name}
									</CharacterRelatedListItem>
								))}
							</CharacterRelatedList>
						</div>
					</CharacterDetailContainer>

					<Image
						className="background__image"
						src={`${characterDetailData.thumbnail.path}.${characterDetailData.thumbnail.extension}`}
					/>
				</div>

				<Button
					className="characterDetail__wrapper__goBackBtn"
					onClick={navigateToCharacterListPage}
				>
					Go Back
				</Button>
			</React.Fragment>
		)}
	</CharacterDetailViewWrapper>
);
export default CharacterDetailView;
