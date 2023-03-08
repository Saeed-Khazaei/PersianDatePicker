import React from 'react'
import { CustomDay, WeekContainer } from './styles'
import { WeekProps } from './types'
import { e2p } from './utilize'

const Week = ({ date, month }: WeekProps) => {
  const days = []
  let i = 0
  let empty = 0
  const now = new Date()
  while (i < 7) {
    const day = {
      number: date.jDate(),
      isCurrentMonth: date.jMonth() === month.jMonth(),
      isToday: date.isSame(now, 'day'),
      date,
    }

    if (!day.isCurrentMonth) {
      empty += 1
    }

    days.push(
      <CustomDay
        isToday={day.isToday ?? false}
        isCurrentMonth={day.isCurrentMonth ?? false}
        key={`${day.date.format('jYYYY/jMM/jDD')}`}
        data-id={`${day.date.format('jYYYY/jMM/jDD')}`}
      >
        {e2p(`${day.number}`)}
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
