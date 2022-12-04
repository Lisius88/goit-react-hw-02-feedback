import styled from '@emotion/styled';

export const Button = styled.button`
  height: 40px;
  width: 90px;
  margin-left: 15px;

  display: inline-block;
  text-decoration: none;
  border: 2px solid #e8f0f7;
  text-align: center;
  margin-left: 10px;

  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', Тahoma, sans-serif;
  background: #02788d;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  z-index: 1;

  :hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;
