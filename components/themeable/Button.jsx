import React from 'react'
import Button from '../Button'
import themeable from '../../lib/decorators/themeable'

export default themeable(Button, (customizations, props) => ({
  customize: {
    ...props.customize,
    backgroundColor: customizations.color_button,
    textColor: customizations.color_button_text
  }
}))
