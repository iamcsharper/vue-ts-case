import moment from 'moment'
export function dateFormat(value: Date) {
  return moment(value).format('DD/MM/YYYY')
}
