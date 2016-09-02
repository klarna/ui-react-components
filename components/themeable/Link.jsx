import React from 'react'
import Link from '../Link'
import themeable from '../../lib/decorators/themeable'

export default themeable(Link, (customizations) => ({
  textColor: customizations.color_link
}))
