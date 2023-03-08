export type PersianDatePickerProps = {
  input?: boolean
  isGregorian?: boolean
}

export interface RenderWeeksProps {
  month: moment.Moment
  isGregorian: boolean
}

export interface WeekProps extends RenderWeeksProps {
  date: moment.Moment
}

export type UsePersianDatePicker = {
  moment(inp?: moment.MomentInput, strict?: boolean): moment.Moment
}
