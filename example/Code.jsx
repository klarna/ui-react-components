import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import asString from 'react-to-jsx'

export default function Code ({ children, width }) {
  const code = React.Children.map(children, (item) => {
    return asString(item, { indent: '  ' })
  }).join('')

  return (
    <section style={width && { width }}>
      <article>
        {children}
      </article>
      <SyntaxHighlighter language='xml' stylesheet='github-gist'>
        {code}
      </SyntaxHighlighter>
    </section>
  )
}
