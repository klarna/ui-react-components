import Button from '../Button'
import themeable from '../../lib/decorators/themeable'

// TODO: borderRadius works for PrimaryButton, but not for SecondaryButton
// because of the inner border-radius not matching up.
export default themeable(Button, (customizations, props) => ({
  ...props,
  customize: {
    ...props.customize,
    backgroundColor: customizations.color_button,
    // TODO: border-radii are not themeable/customizable yet, but we can support 0px, e.g. squared design
    borderRadius: customizations.radius_border === '0px' ? '0px' : undefined,
    textColor: customizations.color_button_text
  }
}))
