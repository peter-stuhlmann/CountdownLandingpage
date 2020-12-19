import styled from 'styled-components';

import Hr from '../assets/hr.png';
import Colon from '../assets/colon.png';

const StyledCountdown = styled.section`
  text-align: center;

  .pair {
    display: inline-block;
    position: relative;
    text-align: left;
    width: 152px;
    padding-right: 42px;

    @media (max-width: 768px) {
      width: 100px;
      padding-right: 30px;
    }

    @media (max-width: 600px) {
      width: 76px;
      padding-right: 21px;
    }

    @media (max-width: 400px) {
      width: 60px;
      padding-right: 10px;
    }

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

      @media (max-width: 768px) {
        background-image: url(${Colon});
        background-position: 12px 20px;
        background-size: 6px 24px;
        height: 62px;
        width: 30px;
      }

      @media (max-width: 600px) {
        background-image: url(${Colon});
        background-position: 9px 14px;
        background-size: 4px 16px;
        height: 43px;
        width: 21px;
      }

      @media (max-width: 400px) {
        background-image: url(${Colon});
        background-position: 7px 12px;
        background-size: 3px 11px;
        height: 35px;
        width: 15px;
      }
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

      @media (max-width: 768px) {
        width: 44px;
        height: 62px;
        line-height: 62px;
        margin: 0 3px;
        font-size: 45px;
      }

      @media (max-width: 600px) {
        width: 34px;
        height: 43px;
        line-height: 43px;
        margin: 0 2px;
        font-size: 30px;
      }

      @media (max-width: 400px) {
        width: 25px;
        height: 35px;
        line-height: 35px;
        margin: 0 2px;
        font-size: 23px;
      }

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
              background-repeat: no-repeat;
              background-size: 64px 18px;
              position: absolute;
              z-index: 3;
              left: 1px;
              width: 64px;
              height: 9px;
              opacity: 0.8;

              @media (max-width: 768px) {
                background-image: url(${Hr});
                background-size: 42px 9px;
                width: 48px;
                height: 4.5px;
              }

              @media (max-width: 600px) {
                background-image: url(${Hr});
                background-size: 32px 9px;
                width: 32px;
                height: 4.5px;
              }

              @media (max-width: 400px) {
                background-size: 23px 9px;
              }
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

              @media (max-width: 768px) {
                background-position: 0 -4.5px;
              }
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
