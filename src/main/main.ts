import { LocaleCache } from '../locale-cache/locale-cache';
import { NestedLocale } from '../nested-locale/nested-locale';
import { ILocale, ILocaleEntry } from './main-interface';

export class Locale implements ILocale {
  private localeCache: LocaleCache;

  public async cache(entry: ILocaleEntry): Promise<void> {
    if (!this.localeCache) {
      this.localeCache = new LocaleCache();
    }

    await this.localeCache.setResources(entry);
  }

  public getCollection(chain: string): NestedLocale {
    return this.localeCache.getCollection(chain);
  }

  public translate(key: string): string {
    return this.localeCache.translate(key);
  }
}
