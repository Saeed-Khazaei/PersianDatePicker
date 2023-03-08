import { useEffect, useMemo, useRef, useState } from 'react'
import { UsePersianDatePicker } from './types'

const usePersianDatePicker = ({
  moment,
  selectedDay,
  isGregorian,
  onSelectDay,
  isRange,
  onSelectRange,
  rangeDays,
}: UsePersianDatePicker) => {
  const [showCalendar, setShowCalendar] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const [month, setMonth] = useState(moment())

  const selectedDays = useMemo(() => {
    if (isRange) {
      return rangeDays
    } else {
      return [selectedDay, null]
    }
  }, [rangeDays, selectedDay, isRange])

  const previous = () => {
    const newMonth = month.clone()
    setMonth(isGregorian ? newMonth.subtract(1, 'month') : newMonth.subtract(1, 'jMonth'))
  }

  const next = () => {
    const newMonth = month.clone()
    setMonth(isGregorian ? newMonth.add(1, 'month') : newMonth.add(1, 'jMonth'))
  }

  const inputTitle = useMemo(
    () =>
      !isRange
        ? !!selectedDay
          ? moment(selectedDay).format(isGregorian ? 'YYYY/MM/DD' : 'jYYYY/jMM/jDD')
          : moment(new Date()).format(isGregorian ? 'YYYY/MM/DD' : 'jYYYY/jMM/jDD')
        : !!rangeDays &&
          `${
            rangeDays[0] ? moment(rangeDays[0]).format(isGregorian ? 'YYYY/MM/DD' : 'jYYYY/jMM/jDD') : '____/__/__'
          } - ${
            rangeDays[1] ? moment(rangeDays[1]).format(isGregorian ? 'YYYY/MM/DD' : 'jYYYY/jMM/jDD') : '____/__/__'
          }`,
    [isRange, isGregorian, selectedDay, rangeDays],
  )

  const handleInputClick = () => {
    setShowCalendar(!showCalendar)
  }

  const onSelect = (date: moment.Moment) => {
    if (isRange) {
      if (!!onSelectRange && !!selectedDays) {
        console.log('selectedDays', selectedDays)
        if ((!selectedDays[0] && !selectedDays[1]) || (selectedDays[0] && selectedDays[1])) {
          onSelectRange([date.toDate(), null])
        }
        if (
          selectedDays[0] &&
          !selectedDays[1] &&
          moment(selectedDays[0]).format('jYYYY/jMM/jDD') === date.format('jYYYY/jMM/jDD')
        ) {
          onSelectRange([null, null])
        }
        if (
          selectedDays[0] &&
          !selectedDays[1] &&
          moment(selectedDays[0]).format('jYYYY/jMM/jDD') !== date.format('jYYYY/jMM/jDD')
        ) {
          if (+moment(selectedDays[0]).format('jYYYYjMMjDD') > +moment(date.toDate()).format('jYYYYjMMjDD')) {
            onSelectRange([date.toDate(), selectedDays[0]])
          } else {
            onSelectRange([selectedDays[0], date.toDate()])
          }
          setShowCalendar(false)
        }
      } else {
        return
      }
    } else {
      if (!!onSelectDay) {
        onSelectDay(date.toDate())
        setShowCalendar(false)
      }
    }
  }

  useEffect(() => {
    const handler = (e: Event) => {
      if (
        inputRef &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        calendarRef &&
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setShowCalendar(false)
        return
      }
    }
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  }, [])

  useEffect(() => {
    if (selectedDay) {
      setMonth(moment(selectedDay))
    } else {
      setMonth(moment(month ?? new Date()))
    }
  }, [selectedDay, isGregorian])

  return {
    showCalendar,
    inputRef,
    calendarRef,
    handleInputClick,
    month,
    previous,
    next,
    inputTitle,
    selectedDays,
    onSelect,
  }
}

export default usePersianDatePicker
