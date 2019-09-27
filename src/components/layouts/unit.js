import styled from 'styled-components'

const baseStyle = {
  padding: '1.5rem 1rem'
}

const Unit = styled.div(({ theme, styleObj, stretchRight, stretchBottom }) => {
  const propStyle = {}
  if (stretchRight) {
    propStyle.marginRight = 'auto'
  }
  if (stretchBottom) {
    propStyle.marginBottom = 'auto'
  }
  const unitStyle = theme ? theme.unitStyle : {}
  return { ...baseStyle, ...propStyle, ...unitStyle, ...styleObj }
})

export default Unit
