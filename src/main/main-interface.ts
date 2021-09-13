export interface ILocaleEntry {
  readonly language: string;
  readonly localeFolderPath: string;
}

export interface ILocale {
  translate(key: string): string;
}
