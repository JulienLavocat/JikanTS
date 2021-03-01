import ow from "ow";

import { Producer as ProducerResult } from "./interfaces/producer/Producer";

import { Logger } from "./utils";
import { ApiConsumer } from "./apiConsumer";

export default class Producer extends ApiConsumer {
	/**
	 * Fetches anime by the specified Producer/Studio/Licensor
	 *
	 * @param id - The producer id
	 */
	public async get(id: number, page: number = 1) {
		try {
			ow(id, ow.number.positive);
			ow(page, ow.number.positive);

			return this.request<ProducerResult>(`/producer/${id}/${page}`);
		} catch (error) {
			Logger.error(error);
		}
	}
}
