import { IResource } from '../locale-cache/locale-cache-interface';
import { ILocale } from '../main/main-interface';

export class NestedLocale implements ILocale {
  public constructor(private resources: IResource) {}

  translate(key: string): string {
    const value = this.resources[key];

    return typeof value === 'string' ? value : JSON.stringify(value);
  }
}
