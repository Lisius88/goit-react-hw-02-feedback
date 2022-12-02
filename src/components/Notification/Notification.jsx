import PropTypes from 'prop-types';

export const Notiffication = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

Notiffication.propTypes = {
  message: PropTypes.string.isRequired,
};
