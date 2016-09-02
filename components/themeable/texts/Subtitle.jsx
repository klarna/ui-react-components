import React from 'react'
import Subtitle from '../../texts/Subtitle'
import themeable from '../../../lib/decorators/themeable'

export default themeable(Subtitle, ({ customizations, ...props }) => ({
  ...props,
  style: {
    ...props.style,
    color: customizations.color_header
  }
}))
