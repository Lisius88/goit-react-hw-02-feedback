import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, incrementStatisticsData }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            name={option}
            type="button"
            onClick={incrementStatisticsData}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  incrementStatisticsData: PropTypes.func.isRequired,
};
