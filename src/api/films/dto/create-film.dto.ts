export class CreateFilmDto {
  _id: string;
  readonly title: string;
  readonly poster: string;
  readonly releaseYear: number;
  readonly country: string[];
  readonly genre: string[];
  readonly director: string[];
  readonly actors: string[];
  readonly description: string;
  readonly rating: number;
  readonly price: number;
  readonly trailer: string;
}
