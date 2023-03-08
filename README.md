## Persian Date Picker

It is a two-way calendar based on Jalaali and Gregorian dates, developed for use in react projects.  
This package allows the user to choose a day or time period.  
What is important is that this calendar supports all standard time formats based on Gregorian date (UTC, ...).

---

### Installation

To install persian-date-picker, you will need to have [**npm**](https://npmjs.com/) or [**yarn**](https://yarnpkg.com/) installed on your system. Once you have one of these package managers set up, you can install persian-date-picker by running the following command:

```
npm i @skhazaei/persian-date-picker
```

or

```
yarn add @skhazaei/persian-date-picker
```

This will install the latest version of jalaali-react-date-picker and add it as a dependency to your project.

---

### Usage

#### Calendar type

```typescript
import PersianDatePicker from '@skhazaei/persian-date-picker'

function App() {
  return <PersianDatePicker input={false} />
}
```

---

### Options

| Property | type    | **Description**                                                                                                                 |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| input    | boolean | by defalute calendar has an input to show its value. if you want only use calendar without input you have to pass `false` value |
