import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import { colors } from '../data';

function SocialMediaIcons({icon}) {
  return (
    <FontAwesomeIcon color={colors.white} fontSize="25px" icon={icon} />

  )
}

export default SocialMediaIcons
SocialMediaIcons.propTypes = {
  icon: PropTypes.object.isRequired, // Adjust the PropTypes based on the type of icon you expect
};