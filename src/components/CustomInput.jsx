import PropTypes from 'prop-types';
import { colors } from '../data'
import { Input } from '@chakra-ui/react';

function CustomInput({placeholder}) {
  return (
    <Input border={`1px solid ${colors.light}`} borderRadius="2px" padding={2} placeholder={placeholder} mt={4} />
  )
}

export default CustomInput
CustomInput.propTypes = {
  placeholder: PropTypes.string.isRequired
}
