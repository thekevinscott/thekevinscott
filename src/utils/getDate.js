import {
  compareAsc,
  format as _format,
  addHours,
} from 'date-fns';

// EST timezone
const getDate = date => addHours(date, 5);
export const isAfter = (date, current) => date && compareAsc(current, date) >= 0;

const FORMAT = 'MMMM Do, YYYY';
export const format = d => _format(d, FORMAT);
