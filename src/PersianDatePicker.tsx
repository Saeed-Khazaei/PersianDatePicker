import moment from 'moment-jalaali'
import React from 'react'
import DayNames from './DayNames'
import { RenderWeeks } from './RenderWeeks'
import { ArrowButton, Calendar, Container, Header, Input } from './styles'
import { PersianDatePickerProps } from './types'
import usePersianDatePicker from './usePersianDatePicker'
import { e2p } from './utilize'
moment.loadPersian()

const PersianDatePicker = (props: PersianDatePickerProps) => {
  const { input = true } = props

  const { showCalendar, inputRef, calendarRef, handleInputClick, month, previous, next, inputTitle } =
    usePersianDatePicker({ ...props, moment })

  return (
    <Calendar dir='rtl'>
      {input && (
        <Input ref={inputRef} onClick={handleInputClick}>
          {inputTitle}
        </Input>
      )}
      <Container showCalendar={showCalendar} input={input} ref={calendarRef}>
        <Header>
          <ArrowButton onClick={previous}>
            <span>&#10094;</span>
          </ArrowButton>
          <span role='heading'>
            {month.format('jMMMM')} {e2p(`${month.format('jYYYY')}`)}
          </span>
          <ArrowButton onClick={next}>
            <span>&#10095;</span>
          </ArrowButton>
        </Header>
        <DayNames />
        <RenderWeeks month={month} />
      </Container>
    </Calendar>
  )
}

export default PersianDatePicker
