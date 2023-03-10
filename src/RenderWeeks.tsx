import React from 'react'
import { Weeks } from './styles'
import { RenderWeeksProps } from './types'
import Week from './Week'

export const RenderWeeks = ({
  month,
  isGregorian,
  selectedDays,
  onSelect,
  minDate,
  maxDate,
  selectedBackgroundColor,
  selectedTextColor,
  rangeBackgroundColor,
}: RenderWeeksProps) => {
  const weeks = []
  let done = false
  const date = isGregorian ? month.clone().startOf('month').weekday(-5) : month.clone().startOf('jMonth').weekday(0)
  let monthIndex = isGregorian ? date.month() : date.jMonth()
  let count = 0

  while (!done) {
    weeks.push(
      <Week
        onSelect={onSelect}
        selectedDays={selectedDays}
        isGregorian={isGregorian}
        key={date.toString()}
        date={date.clone()}
        month={month}
        minDate={minDate}
        maxDate={maxDate}
        selectedBackgroundColor={selectedBackgroundColor}
        selectedTextColor={selectedTextColor}
        rangeBackgroundColor={rangeBackgroundColor}
      />,
    )
    date.add(1, 'w')
    done = (count += 1) > 2 && monthIndex !== (isGregorian ? date.month() : date.jMonth())
    monthIndex = isGregorian ? date.month() : date.jMonth()
  }
  return <Weeks> {weeks} </Weeks>
}
