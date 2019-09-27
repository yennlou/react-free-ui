import styled from 'styled-components'

const baseStyle = {
  background: 'transparent',
  border: '1px solid palevioletred',
  color: 'palevioletred',
  margin: '0 1em',
  padding: '0.25em 1em'
}

const Button = styled.button(({ theme, styleObj }) => {
  const buttonStyle = theme ? theme.buttonStyle : {}
  return { ...baseStyle, ...buttonStyle, ...styleObj }
})

export default Button
