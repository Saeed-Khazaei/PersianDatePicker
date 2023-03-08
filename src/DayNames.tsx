import React from 'react'
import { persianDays } from './defaultValus'
import { DayBtn, WeekDayNames } from './styles'

const DayNames = () => (
  <WeekDayNames>
    {persianDays.map((d) => (
      <DayBtn key={d}>{d}</DayBtn>
    ))}
  </WeekDayNames>
)

export default React.memo(DayNames)
