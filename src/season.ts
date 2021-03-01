import ow from "ow";
import { Season as SeasonResult, Seasons } from "./interfaces/season/Season";
import { SeasonArchive } from "./interfaces/season/SeasonArchive";
import { SeasonLater } from "./interfaces/season/SeasonLater";

import { ApiConsumer } from "./apiConsumer";
import { Logger } from "./utils";

export default class Season extends ApiConsumer {
	/**
	 * Fetches anime of the specified season
	 *
	 * @param year - The wanted year
	 * @param season - The wanted season
	 */
	public async anime(year: number, season: Seasons) {
		try {
			return this.request<SeasonResult>(`/season/${year}/${season}`);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Feteches all the years & their respective seasons that can be parsed from MyAnimeList
	 */
	public async archive() {
		try {
			return this.request<SeasonArchive>("/season/archive");
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches anime that have been announced for the upcoming seasons
	 */
	public async later() {
		try {
			return this.request<SeasonLater>("/season/later");
		} catch (error) {
			Logger.error(error);
		}
	}
}
