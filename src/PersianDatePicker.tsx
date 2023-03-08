import moment from 'moment-jalaali'
import React from 'react'
import DayNames from './DayNames'
import { gregorianMonths } from './defaultValus'
import { RenderWeeks } from './RenderWeeks'
import { ArrowButton, Calendar, Container, Header, Input } from './styles'
import { PersianDatePickerProps } from './types'
import usePersianDatePicker from './usePersianDatePicker'
import { e2p, p2e } from './utilize'
moment.loadPersian()

const PersianDatePicker = (props: PersianDatePickerProps) => {
  const { input = true, isGregorian = false, minDate = null, maxDate = null } = props

  const {
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
  } = usePersianDatePicker({ ...props, moment })

  return (
    <Calendar dir={isGregorian ? 'ltr' : 'rtl'}>
      {input && (
        <Input ref={inputRef} onClick={handleInputClick}>
          {inputTitle}
        </Input>
      )}
      <Container showCalendar={showCalendar} input={input} ref={calendarRef}>
        <Header>
          <ArrowButton
            disabled={minDate ? (month > moment(minDate).startOf('jMonth') ? false : true) : false}
            onClick={previous}
          >
            <span>&#10094;</span>
          </ArrowButton>
          <span role='heading'>
            {isGregorian
              ? p2e(`${gregorianMonths[+month.format('M') - 1]} ${month.format('YYYY')}`)
              : `${month.format('jMMMM')} ${e2p(`${month.format('jYYYY')}`)}`}
          </span>
          <ArrowButton
            disabled={maxDate ? (month < moment(maxDate).startOf('jMonth') ? false : true) : false}
            onClick={next}
          >
            <span>&#10095;</span>
          </ArrowButton>
        </Header>
        <DayNames isGregorian={isGregorian} />
        <RenderWeeks
          selectedDays={[
            selectedDays && selectedDays[0] ? moment(selectedDays[0]) : null,
            selectedDays && selectedDays[1] ? moment(selectedDays[1]) : null,
          ]}
          onSelect={onSelect}
          month={month}
          isGregorian={isGregorian}
          minDate={minDate ? moment(minDate) : null}
          maxDate={maxDate ? moment(maxDate) : null}
        />
      </Container>
    </Calendar>
  )
}

export default PersianDatePicker
