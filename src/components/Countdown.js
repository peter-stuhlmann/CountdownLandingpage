import React, { useEffect, useState } from 'react';
import moment from 'moment';

import StyledCountdown from './StyledCountdown';
import StyledUnit from './StyledUnit';

export default function Countdown() {
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
    <StyledCountdown>
      <div className="pair">
        <div className="num-wrap">
          <div className="num">
            <div className="num-inner">
              <div className="up">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">{duration > 0 ? days.charAt(0) : '0'}</div>
              </div>
              <div className="down">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">{duration > 0 ? days.charAt(0) : '0'}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="num-wrap">
          <div className="num">
            <div className="num-inner">
              <div className="up">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? days.charAt(days.length - 1) : '0'}
                </div>
              </div>
              <div className="down">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? days.charAt(days.length - 1) : '0'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <StyledUnit>Days</StyledUnit>
      </div>
      <div className="pair">
        <div className="num-wrap">
          <div className="num">
            <div className="num-inner">
              <div className="up">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? hours.charAt(0) : '0'}
                </div>
              </div>
              <div className="down">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? hours.charAt(0) : '0'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="num-wrap">
          <div className="num">
            <div className="num-inner">
              <div className="up">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? hours.charAt(hours.length - 1) : '0'}
                </div>
              </div>
              <div className="down">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? hours.charAt(hours.length - 1) : '0'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <StyledUnit>Hours</StyledUnit>
      </div>
      <div className="pair">
        <div className="num-wrap">
          <div className="num">
            <div className="num-inner">
              <div className="up">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? minutes.charAt(0) : '0'}
                </div>
              </div>
              <div className="down">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? minutes.charAt(0) : '0'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="num-wrap">
          <div className="num">
            <div className="num-inner">
              <div className="up">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? minutes.charAt(minutes.length - 1) : '0'}
                </div>
              </div>
              <div className="down">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? minutes.charAt(minutes.length - 1) : '0'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <StyledUnit>Minutes</StyledUnit>
      </div>
      <div className="pair">
        <div className="num-wrap">
          <div className="num">
            <div className="num-inner">
              <div className="up">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? seconds.charAt(0) : '0'}
                </div>
              </div>
              <div className="down">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? seconds.charAt(0) : '0'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="num-wrap">
          <div className="num">
            <div className="num-inner">
              <div className="up">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? seconds.charAt(seconds.length - 1) : '0'}
                </div>
              </div>
              <div className="down">
                <div className="divi"></div>
                <div className="shadow"></div>
                <div className="inn">
                  {duration > 0 ? seconds.charAt(seconds.length - 1) : '0'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <StyledUnit>Seconds</StyledUnit>
      </div>
    </StyledCountdown>
  );
}
