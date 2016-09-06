import Installments from '../Installments'
import themeable from '../../lib/decorators/themeable'

export default themeable(Installments, (customizations, props) => ({
  ...props,
  customize: {
    ...props.customize,
    borderColor: customizations.color_border,
    borderColorSelected: customizations.color_border_selected,
    // TODO: border-radii are not themeable/customizable yet, but we can support 0px, e.g. squared design
    borderRadius: customizations.radius_border === '0px' ? '0px' : undefined,
    labelColor: customizations.color_text
  }
}))
