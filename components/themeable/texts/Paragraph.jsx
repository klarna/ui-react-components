import Paragraph from '../../texts/Paragraph'
import themeable from '../../../lib/decorators/themeable'

export default themeable(Paragraph, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_text
  }
}))
