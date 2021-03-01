import got from "got";
import { JikanHttpClient, queue } from "./utils";
export class ApiConsumer {
	private httpClient: JikanHttpClient;

	constructor(httpClient: JikanHttpClient) {
		this.httpClient = httpClient;
	}

	protected async request<T>(url: string): Promise<T> {
		const { body } = await queue.add(
			async () => await this.httpClient(url, {})
		);

		// Probably fix this in the future
		return body as T;
	}
}
