import styled from 'styled-components';

const StyledUnit = styled.div`
  clear: both;
  font-size: 12px;
  color: #555;
  line-height: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  padding-top: 13px;

  @media (max-width: 768px) {
    padding-top: 8px;
    font-weight: 400;
  }

  @media (max-width: 400px) {
    font-size: 10px;
    padding-top: 5px;
  }
`;

export default StyledUnit;
