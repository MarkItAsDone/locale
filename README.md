# How to use

You can see the example folder, if you need and example usage of this library.

## Installation

To install this library you need to use the following command:

```bash
npm install @rove-team/locale
```

## Create JSON files

You need to create a folder and put your json files in that. It's required to pass the directory of your folder to the `Locale` class.

## Usage

1. Create an instance of `Locale` class and call the cache method:

```typescript
const locale: Locale = new Locale();

await locale.cache({
  language: 'the name of your json file',
  localeFolderPath: join(__dirname, 'folder path of json files')
});
```

2. Get the text value by using the `translate` method:

```json
{
  "Hello": "Hi",
  "Goodbye": "Bye",
  "User": {
    "FirstName": "First Name",
    "LastName": "Last Name"
  }
}
```

```typescript
const helloValue: string = locale.translate('Hello');
```

```typescript
const userLocale = locale.getCollection('User');

const firstNameValue: string = userLocale.translate('FirstName');
```