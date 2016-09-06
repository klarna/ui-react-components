import Field from '../Field'
import themeable from '../../lib/decorators/themeable'

export default themeable(Field, (customizations, props) => ({
  customize: {
    ...props.customize,
    borderColor: customizations.color_border,
    borderColorSelected: customizations.color_border_selected,
    borderRadius: customizations.radius_border,
    labelColor: customizations.color_text_secondary
  }
}))
