import * as moment from 'moment';

export const MAX_BODY_LENGTH = 120;

export const numberWithCommas = (x: number) =>  {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');

};

export const getBodyText =
  (body: string) => body.length <= MAX_BODY_LENGTH ? body : `${body.substr(0, MAX_BODY_LENGTH)}...`;

export const getFormattedDate = (date: Date) => moment(date).format('MMMM Do YYYY, h:mm:ss a');
