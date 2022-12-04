import PropTypes from 'prop-types';
import { NotificationText } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <div>
      <NotificationText>{message}</NotificationText>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
