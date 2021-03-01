// Imports
import ow from "ow";

// Interfaces
import { AnimeById } from "./interfaces/anime/ById";
import { CharactersStaff } from "./interfaces/anime/CharactersStaff";
import { Episodes } from "./interfaces/anime/Episodes";
import { Forum } from "./interfaces/anime/Forum";
import { MoreInfo } from "./interfaces/anime/MoreInfo";
import { News } from "./interfaces/anime/News";
import { Recommendations } from "./interfaces/anime/Recommendations";
import { Reviews } from "./interfaces/anime/Reviews";
import { Stats } from "./interfaces/anime/Stats";
import { UserUpdates } from "./interfaces/anime/UserUpdates";
import { Videos } from "./interfaces/anime/Videos";

// Utils
import { ApiConsumer } from "./apiConsumer";
import { Logger } from "./utils";

export default class Anime extends ApiConsumer {
	/**
	 * Fetches the anime with the given ID
	 *
	 * @param id - The anime id
	 */
	public async byId(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<AnimeById>(`/anime/${id}`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches the list of characters & staff members of the anime
	 *
	 * @param id - The anime id
	 */
	public async charactersStaff(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<CharactersStaff>(
				`/anime/${id}/characters_staff`
			);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches the list of episodes of the anime
	 *
	 * @param id - The anime id
	 * @param page - The page number
	 */
	public async episodes(id: number, page: number = 1) {
		try {
			ow(id, ow.number.positive);
			ow(page, ow.number.positive);

			return this.request<Episodes>(`/anime/${id}/episodes/${page}`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches forum topics related to the item
	 *
	 * @param id - The anime id
	 */
	public async forum(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<Forum>(`/anime/${id}/forum`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches more info related to the item
	 *
	 * @param id - The anime id
	 */
	public async moreInfo(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<MoreInfo>(`/anime/${id}/moreinfo`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches news related to the item
	 *
	 * @param id - The anime id
	 */
	public async news(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<News>(`/anime/${id}/news`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches pictures related to the item
	 *
	 * @param id - The anime id
	 */
	public async pictures(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<any>(`/anime/${id}/pictures`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches recommendations and their weightage made by users
	 *
	 * @param id - The anime id
	 */
	public async recommendations(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<Recommendations>(
				`/anime/${id}/recommendations`
			);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches reviews written by users
	 *
	 * @param id - The anime id
	 * @param page - The page number
	 */
	public async reviews(id: number, page: number = 1) {
		try {
			ow(id, ow.number.positive);
			ow(page, ow.number.positive);

			return this.request<Reviews>(`/anime/${id}/reviews/${page}`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches statistical information related to the item
	 *
	 * @param id - The anime id
	 */
	public async stats(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<Stats>(`/anime/${id}/stats`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches latest list updates made by users
	 *
	 * @param id - The anime id
	 * @param page - The page number
	 */
	public async userUpdates(id: number, page: number = 1) {
		try {
			ow(id, ow.number.positive);
			ow(page, ow.number.positive);

			return this.request<UserUpdates>(
				`/anime/${id}/userupdates/${page}`
			);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches PV & episodes (if any) related to the item
	 *
	 * @param id - The anime id
	 */
	public async videos(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<Videos>(`/anime/${id}/videos`);
		} catch (error) {
			Logger.error(error);
		}
	}
}
