import styled from 'styled-components'

const baseStyle = {
  background: 'transparent',
  border: '1px solid palevioletred',
  color: 'palevioletred',
  margin: '0 1em',
  padding: '0.25em 1em'
}

const Button = styled.button(({ theme }) => {
  if (!theme) return baseStyle
  return Object.assign({}, baseStyle, theme.buttonStyle)
})

export default Button
