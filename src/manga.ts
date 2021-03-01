import ow from "ow";

import { Characters } from "./interfaces/manga/Characters";
import { News } from "./interfaces/manga/News";
import { Reviews } from "./interfaces/manga/Reviews";
import { Stats } from "./interfaces/manga/Stats";
import { UserUpdates } from "./interfaces/manga/UserUpdates";

import { ApiConsumer } from "./apiConsumer";
import { Logger } from "utils";

export default class Manga extends ApiConsumer {
	/**
	 * Fetches the list of characters & staff members of the manga
	 *
	 * @param id - The manga id
	 */
	public async characters(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<Characters>(`/manga/${id}/characters`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches forum topics related to the item
	 *
	 * @param id - The manga id
	 */
	public async forum(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<any>(`/manga/${id}/forum`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches more info related to the item
	 *
	 * @param id - The manga id
	 */
	public async moreInfo(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<any>(`/manga/${id}/moreinfo`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches news related to the item
	 *
	 * @param id - The manga id
	 */
	public async news(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<News>(`/manga/${id}/news`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches pictures related to the item
	 *
	 * @param id - The manga id
	 */
	public async pictures(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<any>(`/manga/${id}/pictures`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches recommendations and their weightage made by users
	 *
	 * @param id - The manga id
	 */
	public async recommendations(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<any>(`/manga/${id}/recommendations`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches reviews written by users
	 *
	 * @param id - The manga id
	 * @param page - The page number
	 */
	public async reviews(id: number, page: number = 1) {
		try {
			ow(id, ow.number.positive);
			ow(page, ow.number.positive);

			return this.request<Reviews>(`/manga/${id}/reviews/${page}`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches statistical information related to the item
	 *
	 * @param id - The manga id
	 */
	public async stats(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<Stats>(`/manga/${id}/stats`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches latest list updates made by users
	 *
	 * @param id - The manga id
	 * @param page - The page number
	 */
	public async userUpdates(id: number, page: number = 1) {
		try {
			ow(id, ow.number.positive);
			ow(page, ow.number.positive);

			return this.request<UserUpdates>(
				`/manga/${id}/userupdates/${page}`
			);
		} catch (error) {
			Logger.error(error);
		}
	}
}
