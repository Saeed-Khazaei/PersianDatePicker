import styled from 'styled-components'

export const Calendar = styled.div`
  width: fit-content;
  position: relative;
`

export const Input = styled.div`
  width: 302px;
  padding: 16px;
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 16px;
  box-sizing: border-box;
  height: 56px;
`

export const WeekDayNames = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  color: #999;
`

export const DayBtn = styled.span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const CustomDay = styled(DayBtn)<{
  isActive: boolean
  isToday: boolean
  isDisabled: boolean
  isCurrentMonth: boolean
  isSelectedDay: boolean
  isBetweenRange: boolean
}>`
  cursor: ${(props) => (props.isActive ? 'pointer' : 'default')};
  color: ${(props) => (props.isSelectedDay ? '#ffffff' : props.isToday ? '#ff0066' : 'black')};
  border-radius: 8px;
  border: 1px solid ${(props) => (props.isToday ? '#ff0066' : 'transparent')};
  background-color: ${(props) => (props.isBetweenRange ? '#FFE5F0' : props.isSelectedDay ? '#ff0066' : 'transparent')};
  opacity: ${(props) => (props.isDisabled ? '50%' : '100%')};
  visibility: ${(props) => (props.isCurrentMonth ? 'visible' : 'hidden')};
`

export const Weeks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.div<{ showCalendar: boolean; input: boolean }>`
  position: ${(props) => (!props.input ? 'relative' : props.showCalendar ? 'absolute' : 'relative')};
  top: ${(props) => (!props.input ? '0' : props.showCalendar ? '58px' : '0')};
  left: 0;
  color: black;
  width: fit-content;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  background-color: white;
  padding: 8px;
  box-shadow: 0 4px 12px -6px #00000033;
  user-select: none;
  display: ${(props) => (!props.input ? 'flex' : props.showCalendar ? 'flex' : 'none')};
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ArrowButton = styled(DayBtn)<{ disabled: boolean }>`
  cursor: pointer;
  visibility: ${(props) => (props.disabled ? 'hidden' : 'visible')};
`
