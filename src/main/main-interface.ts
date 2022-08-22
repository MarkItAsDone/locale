export interface IResource {
  readonly [key: string]: string | IResource;
}

export interface INestedResource {
  [key: string]: IResource;
}

export interface IResourceObject {
  readonly [key: string]: IResource;
}

export interface ILocaleEntry {
  readonly language: string;
  readonly localeObject: IResourceObject;
}

export interface ILocale {
  translate(key: string, stringFormatData?: string[]): string;
}
