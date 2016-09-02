import React from 'react'
import PrimaryTitle from '../../texts/PrimaryTitle'
import themeable from '../../../lib/decorators/themeable'

export default themeable(PrimaryTitle, ({ customizations, ...props }) => ({
  ...props,
  style: {
    ...props.style,
    color: customizations.color_header
  }
}))
