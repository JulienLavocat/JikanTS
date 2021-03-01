// Imports
import ow from "ow";

// Interfaces
import { Characters } from "./interfaces/manga/Characters";
import { News } from "./interfaces/manga/News";
import { Reviews } from "./interfaces/manga/Reviews";
import { Stats } from "./interfaces/manga/Stats";
import { UserUpdates } from "./interfaces/manga/UserUpdates";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches the list of characters & staff members of the manga
 *
 * @param id - The manga id
 */
const characters = async (id: number) => {
	try {
		ow(id, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/manga/${id}/characters`, {})
		);

		return body as Characters;
	} catch (error) {
		Logger.error(error);
	}
};

/**
 * Fetches forum topics related to the item
 *
 * @param id - The manga id
 */
const forum = async (id: number) => {
	try {
		ow(id, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/manga/${id}/forum`, {})
		);

		return body;
	} catch (error) {
		Logger.error(error);
	}
};

/**
 * Fetches more info related to the item
 *
 * @param id - The manga id
 */
const moreInfo = async (id: number) => {
	try {
		ow(id, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/manga/${id}/moreinfo`, {})
		);

		return body;
	} catch (error) {
		Logger.error(error);
	}
};

/**
 * Fetches news related to the item
 *
 * @param id - The manga id
 */
const news = async (id: number) => {
	try {
		ow(id, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/manga/${id}/news`, {})
		);

		return body as News;
	} catch (error) {
		Logger.error(error);
	}
};

/**
 * Fetches pictures related to the item
 *
 * @param id - The manga id
 */
const pictures = async (id: number) => {
	try {
		ow(id, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/manga/${id}/pictures`, {})
		);

		return body;
	} catch (error) {
		Logger.error(error);
	}
};

/**
 * Fetches recommendations and their weightage made by users
 *
 * @param id - The manga id
 */
const recommendations = async (id: number) => {
	try {
		ow(id, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/manga/${id}/recommendations`, {})
		);

		return body;
	} catch (error) {
		Logger.error(error);
	}
};

/**
 * Fetches reviews written by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
const reviews = async (id: number, page: number = 1) => {
	try {
		ow(id, ow.number.positive);
		ow(page, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/manga/${id}/reviews/${page}`, {})
		);

		return body as Reviews;
	} catch (error) {
		Logger.error(error);
	}
};

/**
 * Fetches statistical information related to the item
 *
 * @param id - The manga id
 */
const stats = async (id: number) => {
	try {
		ow(id, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/manga/${id}/stats`, {})
		);

		return body as Stats;
	} catch (error) {
		Logger.error(error);
	}
};

/**
 * Fetches latest list updates made by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
const userUpdates = async (id: number, page: number = 1) => {
	try {
		ow(id, ow.number.positive);
		ow(page, ow.number.positive);

		const { body } = await queue.add(
			async () => await api(`/manga/${id}/userupdates/${page}`, {})
		);

		return body as UserUpdates;
	} catch (error) {
		Logger.error(error);
	}
};

export default {
	characters,
	forum,
	moreInfo,
	news,
	pictures,
	recommendations,
	reviews,
	stats,
	userUpdates,
};
