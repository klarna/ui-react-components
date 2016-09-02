import React from 'react'
import Button from '../Button'
import themeable from '../../lib/decorators/themeable'

export default themeable(Button, (customizations) => ({
  backgroundColor: customizations.color_button,
  textColor: customizations.color_button_text
}))
