import PropTypes from 'prop-types';
import { Good, Bad, Neutral, Percent } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <div>
      <ul>
        <li>
          Good: <Good>{good}</Good>
        </li>
        <li>
          Neutral: <Neutral>{neutral}</Neutral>
        </li>
        <li>
          Bad: <Bad>{bad}</Bad>
        </li>
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          Positive feedback: <Percent percent={percent}>{percent}%</Percent>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
