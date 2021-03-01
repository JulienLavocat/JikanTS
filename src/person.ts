import ow from "ow";
import { Logger } from "utils";
import { ApiConsumer } from "./apiConsumer";

export default class Person extends ApiConsumer {
	/**
	 * Fetches pictures related to the item
	 *
	 * @param id - The person id
	 */
	public async pictures(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<any>(`/person/${id}/pictures`);
		} catch (error) {
			Logger.error(error);
		}
	}
}
