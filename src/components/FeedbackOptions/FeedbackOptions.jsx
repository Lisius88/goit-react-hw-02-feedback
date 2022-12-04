import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, incrementStatisticsData }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            key={option}
            name={option}
            type="button"
            onClick={incrementStatisticsData}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  incrementStatisticsData: PropTypes.func.isRequired,
};
