// Imports
import Anime from "./anime";
import Character from "./character";
import Club from "./club";
import Genre from "./genre";
import Magazine from "./magazine";
import Manga from "./manga";
import Meta from "./meta";
import Person from "./person";
import Producer from "./producer";
import Schedule from "./schedule";
import Search from "./search";
import Season from "./season";
import Top from "./top";
import User from "./user";
import { createHttpClient, JikanHttpClient } from "./utils";

const baseUrl = "https://api.jikan.moe/v3";

export default class Jikan {
	public Anime: Anime;
	public Club: Club;
	public Genre: Genre;
	public Magazine: Magazine;
	// public Manga: Manga;
	// public Meta: Meta;
	// public Person: Person;
	// public Producer: Producer;
	// public Schedule: Schedule;
	public Search: Search;
	// public Season: Season;
	// public Top: Top;
	// public User: User;

	private httpClient: JikanHttpClient;

	constructor(url: string = baseUrl) {
		this.httpClient = createHttpClient(url);

		this.Anime = new Anime(this.httpClient);
		this.Search = new Search(this.httpClient);
		this.Club = new Club(this.httpClient);
		this.Genre = new Genre(this.httpClient);
		this.Magazine = new Magazine(this.httpClient);
	}
}
