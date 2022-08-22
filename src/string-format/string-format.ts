import Format from 'string-format';

export class StringFormat {
  public format(value: string, stringFormatData?: string[]): string {
    if (stringFormatData && stringFormatData.length > 0) {
      return Format(value, ...stringFormatData);
    }

    return value;
  }
}
