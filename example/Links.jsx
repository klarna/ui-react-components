import React from 'react'
import Link from '../components/Link'
import Code from './Code'
import { SecondaryTitle } from '../components/Text'
import Theme from '../components/Theme'
import ThemeableLink from '../components/themeable/Link'

export default function Links () {
  return (
    <div>
      <SecondaryTitle>Regular</SecondaryTitle>
      <Code>
        <Link>Click me!</Link>
      </Code>

      <SecondaryTitle>Dynamic styling</SecondaryTitle>
      <Code>
        <Link customize={{ textColor: '#3500C8' }}>Click me!</Link>
      </Code>

      <SecondaryTitle>Themeable</SecondaryTitle>
      <Code>
        <Theme customizations={{color_link: '#00ce3e'}}>
          <div>
            <ThemeableLink>Click me!</ThemeableLink>
          </div>
        </Theme>
      </Code>
    </div>
  )
}
