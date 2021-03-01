import ow from "ow";

import { Result, SubTypes, Types } from "./interfaces/top/Top";
import { ApiConsumer } from "./apiConsumer";
import { Logger } from "./utils";

export default class Top extends ApiConsumer {
	/**
	 * Fetches top items on MyAnimeList
	 *
	 * @param type - Top items of this type
	 * @param page - The Top page on MyAnimeList is paginated offers 50 items per page
	 * @param subType - Top items of this subtype
	 */
	public async items(
		type: Types = "anime",
		page: number = 1,
		subType?: SubTypes
	) {
		try {
			ow(page, ow.number.positive);
			return this.request<Result>(`/top/${type}/${page}/${subType ? subType : ""}`);
		} catch (error) {
			Logger.error(error);
		}
	}
}
