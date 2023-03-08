export type PersianDatePickerProps = {
  input?: boolean;
};

export interface RenderWeeksProps {
  month: moment.Moment;
}

export interface WeekProps extends RenderWeeksProps {
  date: moment.Moment;
}

export type UsePersianDatePicker = {
  moment(inp?: moment.MomentInput, strict?: boolean): moment.Moment;
};
