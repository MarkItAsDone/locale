import { ILocale, IResource } from '../main/main-interface';
import { StringFormat } from '../string-format/string-format';

export class NestedLocale implements ILocale {
  public constructor(private resources: IResource) {}

  public translate(key: string, stringFormatData?: string[]): string {
    const { [key]: value } = this.resources;

    if (typeof value === 'string') {
      const stringFormat: StringFormat = new StringFormat();

      return stringFormat.format(value, stringFormatData);
    }

    return JSON.stringify(value);
  }
}
