import Switch from '../Switch'
import themeable from '../../lib/decorators/themeable'

export default themeable(Switch, (customizations, props) => ({
  ...props,
  customize: {
    ...props.customize,
    backgroundColor: customizations.color_checkbox,
    bulletColor: customizations.color_checkbox_checkmark
  }
}))
