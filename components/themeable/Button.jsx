import React from 'react'
import Button from '../Button'
import { withPropsFromContext } from 'react-context-props'

function ThemeableButton ({ customizations, ...props}) {
  const customize = customizations && {
    backgroundColor: customizations.color_button,
    textColor: customizations.color_button_text
  }

  return (
    <Button customize={customize} {...props} />
  )
}

export default withPropsFromContext(ThemeableButton, ['customizations'])
