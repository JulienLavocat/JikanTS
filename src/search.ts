import ow from "ow";
import {
	Filters,
	Search as SearchResult,
	SearchTypes,
} from "./interfaces/search/Search";

import { ApiConsumer } from "./apiConsumer";
import { Logger } from "./utils";

export default class Search extends ApiConsumer {
	/**
	 * Search method
	 *
	 * @param query - The query you want to search
	 * @param type - Specify where to search
	 * @param page - The page number of the results
	 * @param filters - The list of filters to add
	 */
	public async search(
		query: string,
		type: SearchTypes,
		page: number = 1,
		filters?: Filters
	) {
		try {
			ow(page, ow.number.positive);
			ow(query, ow.string.minLength(3));

			const url = new URLSearchParams();

			if (filters) {
				if (filters.end_date) {
					filters.end_date = new Date(filters.end_date).toISOString();
				}

				if (filters.genre) {
					ow(filters.genre, ow.number.lessThanOrEqual(44));
					ow(filters.genre, ow.number.greaterThanOrEqual(1));
				}

				if (filters.limit) {
					ow(filters.limit, ow.number.positive);
				}

				if (filters.score) {
					ow(filters.score, ow.number.positive);
				}

				if (filters.start_date) {
					filters.start_date = new Date(
						filters.start_date
					).toISOString();
				}

				Object.entries(filters).forEach(([key, value]) => {
					url.append(key, value);
				});
			}

			return this.request<SearchResult>(
				`/search/${type}?q=${query}&page=${page}?${url.toString()}`
			);
		} catch (error) {
			Logger.error(error);
		}
	}
}
