import styled from 'styled-components'

const baseStyle = {
  padding: '1em 1.5em'
}

const Container = styled.div(({ theme, styleObj }) => {
  const containerStyle = theme ? theme.containerStyle : {}
  return { ...baseStyle, ...containerStyle, ...styleObj }
})

export default Container
