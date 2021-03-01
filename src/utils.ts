// Imports
import got, { GotJSONOptions, GotUrl, Response } from "got";
import PMemoize from "p-memoize";
import PQueue from "p-queue";
import pino from "pino";
import LRU from "quick-lru";

// package.json
import pkg from "../package.json";

export const queue = new PQueue({ concurrency: 2 });

// Fast JSON logger
export const Logger = pino({
	name: "jikants",
	prettyPrint: true,
});

export function createHttpClient(baseUrl: string): JikanHttpClient {
	const client = got.extend({
		baseUrl,
		headers: {
			"User-Agent": `${pkg.name} / ${pkg.version} (${pkg.repository.url})`,
		},
		json: true,
	});
	return PMemoize(client, { cache: new LRU({ maxSize: 1000 }) });
}

export type JikanHttpClient = (
	url: GotUrl,
	options: Partial<GotJSONOptions>
) => Promise<Response<any>>;
