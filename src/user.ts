import ow from "ow";
import { AnimeList, AnimeListTypes } from "./interfaces/user/AnimeList";
import { Friends } from "./interfaces/user/Friends";
import { History, Types } from "./interfaces/user/History";
import { MangaList, MangaListTypes } from "./interfaces/user/MangaList";
import { Profile } from "./interfaces/user/Profile";
import { ApiConsumer } from "./apiConsumer";
import { Logger } from "./utils";

export default class User extends ApiConsumer {
	/**
	 * Fetches the specified user animelist
	 *
	 * @param username - Username on MyAnimeList
	 * @param type - The type to search for
	 * @param page - The page number
	 */
	public async animeList(
		username: string,
		type: AnimeListTypes = "all",
		page: number = 1
	) {
		try {
			ow(page, ow.number.positive);

			return this.request<AnimeList>(
				`/user/${username}/animelist/${type}/${page}`
			);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches the specified user friends
	 *
	 * @param username - Username on MyAnimeList
	 * @param page - The page number
	 */
	public async friends(username: string, page: number = 1) {
		try {
			ow(page, ow.number.positive);

			return this.request<Friends>(`/user/${username}/friends/${page}`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches the specified user history
	 *
	 * @param username - Username on MyAnimeList
	 * @param type - Anime, Manga or Both
	 */
	public async history(username: string, type: Types = "") {
		try {
			return this.request<History>(`/user/${username}/history/${type}`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches the specified user mangalist
	 *
	 * @param username - Username on MyAnimeList
	 * @param type - The type to search for
	 * @param page - The page number
	 */
	public async mangaList(
		username: string,
		type: MangaListTypes = "all",
		page: number = 1
	) {
		try {
			ow(page, ow.number.positive);

			return this.request<MangaList>(
				`/user/${username}/mangalist/${type}/${page}`
			);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches the specified user profile
	 *
	 * @param username - Username on MyAnimeList
	 */
	public async profile(username: string) {
		try {
			return this.request<Profile>(`/user/${username}`);
		} catch (error) {
			Logger.error(error);
		}
	}
}
