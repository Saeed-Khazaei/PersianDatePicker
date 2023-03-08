export type PersianDatePickerProps = {
  input?: boolean
  isGregorian?: boolean
  selectedDay?: Date | null
  onSelectDay?(date: Date): void
  minDate?: Date | null
  maxDate?: Date | null
}

export interface RenderWeeksProps {
  month: moment.Moment
  isGregorian: boolean
  selectedDays: [moment.Moment | null, moment.Moment | null]
  onSelect(date: moment.Moment | string): void
  minDate: moment.Moment | null
  maxDate: moment.Moment | null
}

export interface WeekProps extends RenderWeeksProps {
  date: moment.Moment
}

export type UsePersianDatePicker = PersianDatePickerProps & {
  moment(inp?: moment.MomentInput, strict?: boolean): moment.Moment
}
