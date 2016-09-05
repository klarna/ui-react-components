import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/installments.scss'

const baseClass = 'cui__selector--installments'

const classes = {
  input: `${baseClass}__input`,
  label: `${baseClass}__label`,
  labelConnector: `${baseClass}__label__connector`,
  labelHighlight: `${baseClass}__label__highlight`,
  labelInfo: `${baseClass}__label__info`,
  labelValue: `${baseClass}__label__value`
}

export default React.createClass({
  displayName: 'Installments',

  propTypes: {
    options: PropTypes.arrayOf(PropTypes.shape({
      connector: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      value: PropTypes.node.isRequired
    })).isRequired,
    className: PropTypes.string,
    customize: PropTypes.shape({
      borderColor: PropTypes.string.isRequired,
      borderColorSelected: PropTypes.string.isRequired,
      borderRadius: PropTypes.string.isRequired,
      labelColor: PropTypes.string.isRequired
    }),
    focus: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  },

  componentDidMount () {
    if (
      this.props.focus &&
      document.activeElement !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  componentDidUpdate () {
    if (
      this.props.focus &&
      document.activeElement !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  getInitialState () {
    return { hover: undefined }
  },

  render () {
    const {
      className,
      customize,
      focus,
      name,
      onBlur,
      onChange,
      onFocus,
      options,
      value: selected,
      styles,
      ...remainingProps
    } = this.props

    const {
      hover
    } = this.state

    const classNames = classNamesBind.bind({
      ...defaultStyles,
      ...styles
    })

    const dynamicStyles = customize
    ? {
      borderColor: customize.borderColor,
      borderRadius: customize.borderRadius,
    }
    : undefined

    const highlightDynamicStyles = customize
    ? {
      borderColor: customize.borderColorSelected,
      borderRadius: customize.borderRadius
    }
    : undefined

    return (<div
      className={classNames(baseClass, className)}
      style={dynamicStyles}
      {...remainingProps}>
      {options.map(({ key, value, info, connector }, index) => {
        const id = `${name}-${key}`

        return [
          (<input
            className={classNames(classes.input)}
            type='radio'
            name={name}
            key={`input-${id}`}
            ref={key}
            id={id}
            onBlur={onBlur}
            onChange={onChange && (() => onChange(key))}
            onFocus={(e) => onFocus && onFocus(key, e)}
            checked={key === selected}
            value={key}
           />),
          (<label
            key={`label-${id}`}
            className={classNames(classes.label, 'third', { 'is-focused': focus === key })}
            style={this.labelDynamicStyles(id)}
            onMouseEnter={() => this.onLabelMouseEnter(id)}
            onMouseLeave={() => this.onLabelMouseLeave(id)}
            htmlFor={id}>
            <span className={classNames(classes.labelValue)}>{value}</span>
            <span className={classNames(classes.labelConnector)}>{connector}</span>
            <span className={classNames(classes.labelInfo)}>{info}</span>
            <span className={classNames(classes.labelHighlight)} style={highlightDynamicStyles} />
          </label>)
        ]
      })}
    </div>)
  },

  onLabelMouseEnter (id) {
    this.setState({ hover: id })
  },

  onLabelMouseLeave (id) {
    this.setState({ hover: undefined })
  },

  labelDynamicStyles (id) {
    const { customize } = this.props

    if (!customize) {
      return undefined
    }

    return id === this.state.hover
    ? { color: customize.borderColorSelected }
    : { color: customize.labelColor }
  }
})
