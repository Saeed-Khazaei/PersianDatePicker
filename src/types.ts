interface PersianDatePickerDatePickerProps {
  selectedDay?: Date | null
  onSelectDay?(date: Date): void
  isRange?: false
  rangeDays?: never
  onSelectRange?: never
  rangeBackgroundColor?: never
}

interface PersianDatePickerRangePickerProps {
  selectedDay?: never
  onSelectDay?: never
  onSelectRange(date: [Date | null, Date | null]): void
  rangeDays: [Date | null, Date | null]
  isRange: true
  rangeBackgroundColor?: string
}

type CProps = PersianDatePickerDatePickerProps | PersianDatePickerRangePickerProps

export type PersianDatePickerProps = CProps & {
  input?: boolean
  isGregorian?: boolean
  minDate?: Date | null
  maxDate?: Date | null
  selectedBackgroundColor?: string
  selectedTextColor?: string
}

export interface RenderWeeksProps {
  month: moment.Moment
  isGregorian: boolean
  selectedDays: [moment.Moment | null, moment.Moment | null]
  onSelect(date: moment.Moment | string): void
  minDate: moment.Moment | null
  maxDate: moment.Moment | null
  selectedBackgroundColor: string
  selectedTextColor: string
  rangeBackgroundColor: string
}

export interface WeekProps extends RenderWeeksProps {
  date: moment.Moment
}

export type UsePersianDatePicker = PersianDatePickerProps & {
  moment(inp?: moment.MomentInput, strict?: boolean): moment.Moment
}
