import Checklist from '../Checklist'
import themeable from '../../lib/decorators/themeable'

const ThemeableChecklist = themeable(Checklist, (customizations, props) => ({
  ...props,
  customize: {
    ...props.customize,
    borderColor: customizations.color_border,
    // TODO: border-radii are not themeable/customizable yet, but we can support 0px, e.g. squared design
    borderRadius: customizations.radius_border === '0px' ? '0px' : undefined,
  }
}))

const ThemeableChecklistItem = themeable(Checklist.Item, (customizations, props) => ({
  ...props,
  customize: {
    ...props.customize,
    strokeColor: customizations.color_detail,
    // TODO: border-radii are not themeable/customizable yet, but we can support 0px, e.g. squared design
    borderRadius: customizations.radius_border === '0px' ? '0px' : undefined,
  }
}))

ThemeableChecklist.Item = ThemeableChecklistItem

export default ThemeableChecklist
