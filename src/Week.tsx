import React from 'react'
import { CustomDay, WeekContainer } from './styles'
import { WeekProps } from './types'
import { e2p, p2e } from './utilize'

const Week = ({ date, month, isGregorian, onSelect, selectedDays, minDate, maxDate }: WeekProps) => {
  const days = []
  let i = 0
  let empty = 0
  const now = new Date()
  while (i < 7) {
    const day = {
      number: isGregorian ? date.date() : date.jDate(),
      isCurrentMonth: isGregorian ? date.month() === month.month() : date.jMonth() === month.jMonth(),
      isToday: date.isSame(now, 'day'),
      isSelectedDay:
        (selectedDays &&
          ((selectedDays[0] && date.isSame(selectedDays[0])) || (selectedDays[1] && date.isSame(selectedDays[1])))) ??
        false,
      isDisabled: (maxDate && date.isAfter(maxDate, 'day')) || (minDate && date.isBefore(minDate, 'day')),
      date,
    }

    if (!day.isCurrentMonth) {
      empty += 1
    }

    days.push(
      <CustomDay
        isToday={day.isToday ?? false}
        isCurrentMonth={day.isCurrentMonth ?? false}
        isSelectedDay={day.isSelectedDay}
        isActive={(day.isCurrentMonth && !day.isDisabled) ?? false}
        isDisabled={day.isDisabled ?? false}
        key={`${day.date.format(isGregorian ? 'YYYY/MM/DD' : 'jYYYY/jMM/jDD')}`}
        data-id={`${day.date.format(isGregorian ? 'YYYY/MM/DD' : 'jYYYY/jMM/jDD')}`}
        onClick={() => onSelect(day.date)}
      >
        {isGregorian ? p2e(`${day.number}`) : e2p(`${day.number}`)}
      </CustomDay>,
    )

    date = date.clone()
    date.add(1, 'd')
    i += 1
  }

  if (empty == 7) {
    return null
  }

  return <WeekContainer key={days[0].toString()}>{days}</WeekContainer>
}

export default Week
