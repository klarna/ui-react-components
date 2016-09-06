import Button from '../Button'
import themeable from '../../lib/decorators/themeable'

// TODO: borderRadius works for PrimaryButton, but not for SecondaryButton
// because of the inner border-radius not matching up.
export default themeable(Button, (customizations, props) => ({
  ...props,
  customize: {
    ...props.customize,
    backgroundColor: customizations.color_button,
    borderRadius: customizations.radius_border,
    textColor: customizations.color_button_text
  }
}))
