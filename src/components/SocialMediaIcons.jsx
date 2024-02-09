import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

function SocialMediaIcons({icon}) {
  return (
    <FontAwesomeIcon color="rgb(119, 119, 119)" fontSize="25px" icon={icon} />

  )
}

export default SocialMediaIcons
SocialMediaIcons.propTypes = {
  icon: PropTypes.object.isRequired, // Adjust the PropTypes based on the type of icon you expect
};