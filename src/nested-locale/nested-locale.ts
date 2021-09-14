import { ILocale, IResource } from '../main/main-interface';

export class NestedLocale implements ILocale {
  public constructor(private resources: IResource) {}

  public translate(key: string): string {
    const { [key]: value } = this.resources;

    return typeof value === 'string' ? value : JSON.stringify(value);
  }
}
