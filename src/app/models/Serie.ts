import { Character } from './Character';
import { Comic } from './Comic';
import { Creator } from './Creator';
import { Storie } from './Storie';
import { Event } from './Event';

export interface Serie {
  characters: Character;
  comics: Comic;
  creators: Creator;
  description: string;
  endYear: number;
  events: Event;
  id: number;
  modified: string;
  next: { name: string; resourceURI: string };
  previous: { name: string; resourceURI: string };
  rating: string;
  resourceURI: string;
  startYear: number;
  stories: Storie;
  thumbnail: { extension: string; path: string };
  title: string;
  type: string;
  urls: [{ type: string; url: string }];
}
