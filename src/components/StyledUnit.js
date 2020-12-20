import styled from 'styled-components';

const StyledUnit = styled.div`
  clear: both;
  font-size: 14px;
  color: #fff;
  line-height: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  padding-top: 15px;
  letter-spacing: 0.07em;

  @media (max-width: 768px) {
    padding-top: 8px;
    font-weight: 400;
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
    padding-top: 5px;
  }
`;

export default StyledUnit;
