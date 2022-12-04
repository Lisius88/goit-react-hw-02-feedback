import styled from '@emotion/styled';

export const Good = styled.span`
  color: #008000;
`;
export const Bad = styled.span`
  color: #ff0000;
`;
export const Neutral = styled.span`
  color: #ffffff;
`;

export const Percent = styled.span`
  color: pink;

  color: ${props => {
    if (props.percent < 50) {
      return `red`;
    }
    if (props.percent > 50) {
      return `green`;
    }
    if (props.percent === 50) {
      return `white`;
    }
  }};
`;
