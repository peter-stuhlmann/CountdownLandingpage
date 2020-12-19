import styled from 'styled-components';

import Hr from '../assets/hr.png';
import Colon from '../assets/colon.png';

const StyledCountdown = styled.section`
  .pair {
    display: inline-block;
    position: relative;
    text-align: left;
    width: 152px;
    padding-right: 42px;

    &:after {
      content: '';
      background-image: url(${Colon});
      background-position: 18px 27px;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 20;
      top: 0;
      right: 0;
      width: 42px;
      height: 86px;
      display: block;
      overflow: hidden;
    }

    &:last-child {
      padding-right: 0;

      &:after {
        display: none;
      }
    }

    .num-wrap {
      position: relative;
      float: left;
      width: 66px;
      height: 86px;
      font-size: 60px;
      line-height: 86px;
      margin: 0 5px;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

      .num {
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        .num-inner {
          display: block;
          height: 100%;
          perspective: 200px;

          .up,
          .down {
            z-index: 1;
            position: absolute;
            left: 0;
            width: 100%;
            height: 50%;
            overflow: hidden;
            box-sizing: border-box;

            .divi {
              background-image: url(${Hr});
              position: absolute;
              z-index: 3;
              left: 1px;
              width: 64px;
              height: 9px;
              opacity: 0.8;
            }

            .shadow {
              position: absolute;
              width: 100%;
              height: 100%;
              z-index: 2;
            }

            .inn {
              background-image: linear-gradient(
                #e7e7e7,
                #f2f2f2 50%,
                #fff 51%,
                #f8f8f8
              );
              position: absolute;
              left: 0;
              z-index: 1;
              width: 100%;
              height: 200%;
              color: #555;
              text-transform: uppercase;
              text-align: center;
              border: 1px #c2c2c2 solid;
              box-sizing: border-box;
              border-radius: 4px;
            }
          }

          .up {
            transform-origin: 50% 100%;
            top: 0;

            .divi {
              background-position: 0 0;
              bottom: 0;
            }

            .inn {
              top: 0;
            }
          }

          .down {
            transform-origin: 50% 0%;
            bottom: 0;

            .divi {
              background-position: 0 -9px;
              top: 0;
            }

            .inn {
              bottom: 0;
            }
          }
        }
      }
    }
  }
`;

export default StyledCountdown;
