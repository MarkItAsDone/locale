import { LocaleSide } from './main-enum';

export interface ILocaleEntry {
  readonly language: string;
  readonly localeFolderPath: string;
  readonly side?: LocaleSide;
}

export interface ILocale {
  translate(key: string): string;
}
