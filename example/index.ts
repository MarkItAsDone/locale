import { join } from 'path';
import { Locale } from '../src/main/main';
import { Language } from './example-enum';

async function example() {
  const locale: Locale = new Locale();
  await locale.cache({
    language: Language.ENGLISH_US,
    localeFolderPath: join(__dirname, './languages')
  });

  const myLocale = locale.getCollection('user');

  const helloValue = locale.translate('hello');
  const goldValue = locale.translate('gold');
  const firstName = myLocale.translate('firstName');

  console.log(helloValue);
  console.log(goldValue);
  console.log(firstName);
}

example();
