import Checklist from '../Checklist'
import themeable from '../../lib/decorators/themeable'

const ThemeableChecklist = themeable(Checklist, (customizations, props) => ({
  ...props,
  customize: {
    ...props.customize,
    borderColor: customizations.color_border,
    borderRadius: customizations.radius_border
  }
}))

const ThemeableChecklistItem = themeable(Checklist.Item, (customizations, props) => ({
  ...props,
  customize: {
    ...props.customize,
    strokeColor: customizations.color_detail,
    borderRadius: customizations.radius_border
  }
}))

ThemeableChecklist.Item = ThemeableChecklistItem

export default ThemeableChecklist
