import ow from "ow";

import { Periods, Status, Types } from "./interfaces/meta/Meta";

import { ApiConsumer } from "./apiConsumer";
import { Logger } from "./utils";

export default class Meta extends ApiConsumer {
	/**
	 * Requests related to meta information regarding the Jikan REST Instance
	 *
	 * @param type - The type you're searching for
	 * @param period - The period you're searching for
	 * @param offset - 1,000 requests are shown per page, you can use the offset to show more
	 */
	public async requests(
		type: Types = "anime",
		period: Periods = "monthly",
		offset: number = 1000
	) {
		try {
			ow(offset, ow.number.positive);

			return this.request<any>(
				`/meta/requests/${type}/${period}/${offset}`
			);
		} catch (error) {
			Logger.error(error);
		}
	}

	/**
	 * Fetches the status of the Jikan REST API
	 */
	public async status() {
		try {
			return this.request<Status>("/meta/status");
		} catch (error) {
			Logger.error(error);
		}
	}
}
