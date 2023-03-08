import React from 'react'
import { gregorianDays, persianDays } from './defaultValus'
import { DayBtn, WeekDayNames } from './styles'

const DayNames = ({ isGregorian }: { isGregorian: boolean }) => (
  <WeekDayNames>
    {isGregorian
      ? gregorianDays.map((d) => <DayBtn key={d}>{d}</DayBtn>)
      : persianDays.map((d) => <DayBtn key={d}>{d}</DayBtn>)}
  </WeekDayNames>
)

export default React.memo(DayNames)
