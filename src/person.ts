// Imports
import ow from "ow";

// Interfaces

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The person id
 */
const pictures = async (id: number) => {
	try {
		ow(id, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/person/${id}/pictures`, {})
		);

		return body;
	} catch (error) {
		Logger.error(error);
	}
};

export default {
	pictures,
};
