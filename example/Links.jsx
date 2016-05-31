import React from 'react'
import Link from '../components/Link'
import { PrimaryTitle, Subtitle, Paragraph} from '../components/Text'
import Code from './Code'

export default function Links () {
  return (
    <div>
      <PrimaryTitle>Link</PrimaryTitle>

      <Subtitle>Regular</Subtitle>
      <Code>
        <Link>Click me!</Link>
      </Code>

      <Subtitle>React Router Link</Subtitle>
      <Paragraph>Notice that this should be used inside a context with a react-router in order for this link to work</Paragraph>
      <Code>
        <Link to="path">Click me!</Link>
      </Code>

    </div>
  )
}
