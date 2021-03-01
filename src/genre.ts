import ow from "ow";

import { Anime, Manga } from "./interfaces/genre/Genre";
import { ApiConsumer } from "./apiConsumer";
import { Logger } from "utils";

export default class Genre extends ApiConsumer {
	/**
	 * Fetches Anime items of the genre
	 *
	 * @param genreId - Genre ID from MyAnimeList
	 * @param page - Number of the page
	 */
	public async anime(genreId: number, page: number = 1) {
		try {
			ow(genreId, ow.number.lessThanOrEqual(43));
			ow(genreId, ow.number.greaterThanOrEqual(1));

			return this.request<Anime>(`/genre/anime/${genreId}/${page}`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches Manga items of the genre
	 *
	 * @param genreId - Genre ID from MyAnimeList
	 * @param page - Number of the page
	 */
	public async manga(genreId: number, page: number = 1) {
		try {
			ow(genreId, ow.number.lessThanOrEqual(43));
			ow(genreId, ow.number.greaterThanOrEqual(1));

			return this.request<Manga>(`/genre/manga/${genreId}/${page}`);
		} catch (error) {
			Logger.error(error);
		}
	}
}
