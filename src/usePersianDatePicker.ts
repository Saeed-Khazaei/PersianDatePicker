import { useEffect, useMemo, useRef, useState } from 'react'
import { UsePersianDatePicker } from './types'

const usePersianDatePicker = ({ moment }: UsePersianDatePicker) => {
  const [showCalendar, setShowCalendar] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const [month, setMonth] = useState(moment())

  const previous = () => setMonth(month.clone().subtract(1, 'jMonth'))
  const next = () => setMonth(month.clone().add(1, 'jMonth'))

  const inputTitle = useMemo(() => moment(new Date()).format('jYYYY/jMM/jDD'), [])

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

  const handleInputClick = () => {
    setShowCalendar(!showCalendar)
  }

  return {
    showCalendar,
    inputRef,
    calendarRef,
    handleInputClick,
    month,
    previous,
    next,
    inputTitle,
  }
}

export default usePersianDatePicker
