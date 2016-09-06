import React from 'react'
import InstallmentsComponent from '../components/Installments'
import Theme from '../components/Theme'
import ThemeableInstallmentsComponent from '../components/themeable/Installments'
import UncontrolledInstallments from '../components/uncontrolled/Installments'
import { SecondaryTitle, Subtitle } from '../components/Text'
import Code from './Code'

const options = [
  { key: 'installments_6', value: '$64.17/mo.', connector: 'for', info: ' 6 months' },
  { key: 'installments_12', value: '$32.09/mo.', connector: 'for', info: ' 12 months' },
  { key: 'installments_24', value: '$16.05/mo.', connector: 'for', info: ' 24 months' }
]

export default function Installments () {
  return (
    <div>
      <Subtitle>Regular</Subtitle>
      <Code>
        <InstallmentsComponent
          onChange={(key) => console.log('You selected', key)}
          name='installments'
          value='installments_12'
          options={options}
        />
      </Code>

      <Subtitle>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledInstallments
          onChange={(key) => console.log('You selected', key)}
          name='installments2'
          value='installments_24'
          options={options}
        />
      </Code>

      <SecondaryTitle margins>Themeable</SecondaryTitle>
      <Code>
        <Theme customizations={{color_border: '#660080', color_border_selected: '#00ce3e', color_text: 'rgb(32, 111, 54)', radius_border: '8px'}}>
          <ThemeableInstallmentsComponent
            onChange={(key) => console.log('You selected', key)}
            name='installments'
            value='installments_24'
            options={options}
          />
        </Theme>
      </Code>
    </div>
  )
}
