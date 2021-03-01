import ow from "ow";
import { Logger } from "utils";
import { ApiConsumer } from "./apiConsumer";
import { Info, Members } from "./interfaces/club/Club";

export default class Club extends ApiConsumer {
	public async info(id: number) {
		try {
			ow(id, ow.number.positive);

			return this.request<Info>(`/club/${id}`);
		} catch (error) {
			Logger.error(error);
		}
	}

	public async members(id: number, page: number = 1) {
		try {
			ow(page, ow.number.positive);
			ow(id, ow.number.positive);

			return this.request<Members>(`/club/${id}/members/${page}`);
		} catch (error) {
			Logger.error(error);
		}
	}
}
