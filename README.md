## Persian Date Picker

Persian Date Picker is a lightweight and user-friendly date picker component for React, specifically designed to support the Persian calendar. It offers a seamless two-way conversion between Jalaali and Gregorian dates, making it ideal for developers looking to incorporate the Persian calendar into their React projects. With this package, users can easily choose a date or time period, while also having access to a wide range of standard time formats based on Gregorian dates, including UTC and more. Overall, the Persian Date Picker is a highly versatile and reliable option for anyone looking to integrate a Persian calendar into their React application.

---

### Installation

To install persian-date-picker, you will need to have [**npm**](https://npmjs.com/) or [**yarn**](https://yarnpkg.com/) installed on your system. Once you have one of these package managers set up, you can install persian-date-picker by running the following command:

```bash
npm i @skhazaei/persian-date-picker
```

or

```bash
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

#### Gregorian Calendar

to use it, you have to pass `isGregorian={true}` to the component:

```typescript
import PersianDatePicker from '@skhazaei/persian-date-picker'

function App() {
  return <PersianDatePicker input={false} isGregorian={true} />
}
```

---

### Options

| Property      | Type                                                     | Description |
| --------------| -------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| input         | `boolean`                                                | by defalut, calendar has an input to show its value. if you want only use calendar without input you have to pass `false` value |
| isGregorian   | `boolean`                                                | by defalut, this value is `false`. |
| selectedDay   | `Date` \| `null`                                | \- |
| onSelectDay   | `Date`                                                   | \- |
| minDate       | `Date` \| `null`                                | if you want to disable days before a special day, you need to pass your date as property to the component. |
| maxDate       | `Date` \| `null`                                | if you want to disable days a after special day, you need to pass your date as property to the component. |
| isRange       | `boolean`                                                | When you want use calendar as range picker, you have to add `isRange={true}` as a property to the component. it need also  |
| rangeDays     | [`Date` \| `null` , `Date` \| `null`]  | It accept an array of two values. the first as first date and the last one as last date. |
| onSelectRange | [`Date`,`Date`]                                        | It will return an array of selected range of dates. |
| selectedBackgroundColor | `hex`                                       | \- |
| selectedTextColor | `hex`                                       | \- |
| rangeBackgroundColor | `hex`                                       | \- |
