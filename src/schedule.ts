import { Days, Schedule as ScheduleType } from "./interfaces/schedule/Schedule";
import { ApiConsumer } from "./apiConsumer";
import { Logger } from "./utils";

export default class Schedule extends ApiConsumer {
	/**
	 * Fetches anime schedule of the week or specified day
	 */
	public async anime(day: Days = "monday") {
		try {
			return this.request<ScheduleType>(`/schedule/${day}`);
		} catch (error) {
			Logger.error(error);
		}
	}
}
