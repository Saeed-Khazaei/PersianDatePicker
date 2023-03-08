import { Weeks } from './styles';
import { RenderWeeksProps } from './types';
import Week from './Week';

export const RenderWeeks = ({
  month
}: RenderWeeksProps) => {
  const weeks = []
  let done = false
  const date = month.clone().startOf('jMonth').weekday(0)
  let monthIndex = date.jMonth()
  let count = 0

  while (!done) {
    weeks.push(
      <Week
        key={date.toString()}
        date={date.clone()}
        month={month}
      />,
    )
    date.add(1, 'w')
    done = ((count += 1) > 2 && monthIndex !== date.jMonth());
    monthIndex = date.jMonth()
  }
  return <Weeks> {weeks} </Weeks>
}
