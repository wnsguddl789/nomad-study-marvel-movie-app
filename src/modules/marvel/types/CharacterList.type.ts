import type { PaginationType } from "@common/types/Pagination.type";
import type { CharacterType } from "./Character.type";

export type CharacterListType = { results: CharacterType[] } & PaginationType;
