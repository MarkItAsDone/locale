# How to use

You can see the example folder, if you need and example usage of this library.

## Installation

To install this library you need to use the following command:

```bash
npm install @rove-team/locale
```

## Create Object Files

It's recommended to create a typescript file for each language and put the object in that file.

## Usage

1. Create an instance of `Locale` class and call the cache method:

```typescript
const locale: Locale = new Locale({
    language: 'en-us',
    localeObject: {
      'en-us': // english us object,
      'fa-ir': // farsi it object
    }
  });
```

2. Get the text value by using the `translate` method:

```typescript
export const englishUSA = {
  hello: "Hi, The {0} is now logged in as {1}",
  goodbye: "Bye",
  user: {
    firstName: "First Name",
    lastName: "Last Name"
  }
}
```

```typescript
const helloValue: string = locale.translate('hello', ['user', 'admin']);
```

```typescript
const userLocale = locale.getCollection('user');

const firstNameValue: string = userLocale.translate('firstName');
```