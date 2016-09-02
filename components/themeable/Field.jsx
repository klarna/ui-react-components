import React from 'react'
import Field from '../Field'
import themeable from '../../lib/decorators/themeable'

export default themeable(Field, (customizations) => ({
  borderColor: customizations.color_border,
  borderColorSelected: customizations.color_border_selected
}))
