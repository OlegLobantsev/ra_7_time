/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import moment from 'moment'
import 'moment/locale/ru'

moment.locale()

export const withPrettyDate = (OriginalComponent) => (props) => {
  const {date} = props
  const prettyDate = moment(date).fromNow()
  return <OriginalComponent {...props} date={prettyDate} />
}