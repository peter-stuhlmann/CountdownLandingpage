import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';

export default function Home() {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const currentTime = moment().unix();

  const countdownEnd = moment(
    '01-01-2021 00:00:00',
    'DD-MM-YYYY HH:mm:ss'
  ).unix();
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    setDuration(
      moment
        .duration((countdownEnd - currentTime) * 1000, 'milliseconds')
        .asMilliseconds()
    );

    const interval = setInterval(() => {
      setDuration(duration - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownEnd, currentTime, duration]);

  useEffect(() => {
    setDays(
      Math.floor(duration / 1000 / 86400).toString().length >= 2
        ? Math.floor(duration / 1000 / 86400).toString()
        : '0' + Math.floor(duration / 1000 / 86400).toString()
    );
    setHours(
      moment.duration(duration).hours().toString().length === 2
        ? moment.duration(duration).hours().toString()
        : '0' + moment.duration(duration).hours().toString()
    );
    setMinutes(
      moment.duration(duration).minutes().toString().length === 2
        ? moment.duration(duration).minutes().toString()
        : '0' + moment.duration(duration).minutes().toString()
    );
    setSeconds(
      moment.duration(duration).seconds().toString().length === 2
        ? moment.duration(duration).seconds().toString()
        : '0' + moment.duration(duration).seconds().toString()
    );
  }, [duration]);

  return (
    <Fragment>
      {days}:{hours}:{minutes}:{seconds}
    </Fragment>
  );
}
