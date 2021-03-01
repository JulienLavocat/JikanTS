import ow from "ow";
import { Magazine as MagazineResult } from "./interfaces/magazine/Magazine";
import { ApiConsumer } from "./apiConsumer";
import { Logger } from "./utils";

export default class Magazine extends ApiConsumer {
	/**
	 * Fetches manga by the specified Magazine/Serializer/Publisher
	 *
	 * @param id - The magazine id
	 */
	public async get(id: number, page: number = 1) {
		try {
			ow(id, ow.number.positive);
			ow(page, ow.number.positive);

			return this.request<MagazineResult>(`/magazine/${id}/${page}`);
		} catch (error) {
			Logger.error(error);
		}
	}
}
