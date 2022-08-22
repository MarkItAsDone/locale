import { Locale } from '../src/main/main';
import { Language } from './example-enum';
import { englishUSA } from './languages/en-us';
import { farsiIran } from './languages/fa-ir';

async function example() {
  const locale: Locale = new Locale({
    language: Language.ENGLISH_US,
    localeObject: {
      [Language.ENGLISH_US]: englishUSA,
      [Language.FARSI_IR]: farsiIran
    }
  });

  const myLocale = locale.getCollection('user');

  const helloValue = locale.translate('hello', ['karim', 'the best']);
  const goldValue = locale.translate('gold');
  const firstName = myLocale.translate('firstName');

  console.log(helloValue);
  console.log(goldValue);
  console.log(firstName);
}

example();
