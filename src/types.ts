export type PersianDatePickerProps = {
  input?: boolean
  isGregorian?: boolean
  selectedDay?: Date | null
  onSelectDay?(date: Date): void
}

export interface RenderWeeksProps {
  month: moment.Moment
  isGregorian: boolean
  selectedDays: [moment.Moment | null, moment.Moment | null]
  onSelect(date: moment.Moment | string): void
}

export interface WeekProps extends RenderWeeksProps {
  date: moment.Moment
}

export type UsePersianDatePicker = PersianDatePickerProps & {
  moment(inp?: moment.MomentInput, strict?: boolean): moment.Moment
}
