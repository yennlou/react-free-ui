import styled from 'styled-components'

const baseStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const Row = styled.div(({ theme, styleObj }) => {
  const rowStyle = theme ? theme.rowStyle : {}
  return { ...baseStyle, ...rowStyle, ...styleObj }
})

export default Row
