import React from 'react'
import IconButton from './IconButton'
import PropTypes from 'prop-types'
import theme from './theme'

const CloseButton = props => <IconButton {...props} name="closeLight" />

CloseButton.defaultProps = {
  size: 14,
  title: 'close',
  theme: theme
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  title: PropTypes.string
}

CloseButton.displayName = 'CloseButton'

export default CloseButton
