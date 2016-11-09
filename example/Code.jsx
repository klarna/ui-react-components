import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import asString from 'react-element-to-jsx-string'
import github_gist from 'react-syntax-highlighter/dist/styles/github-gist'

export default function Code ({ children, width }) {
  const code = React.Children.map(children, asString).join('')

  return (
    <section style={width && { width }}>
      <article>
        {children}
      </article>
      <SyntaxHighlighter language='xml' style={github_gist}>
        {code}
      </SyntaxHighlighter>
    </section>
  )
}
