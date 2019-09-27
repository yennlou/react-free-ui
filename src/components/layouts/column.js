import styled from 'styled-components'

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const Column = styled.div(({ theme, styleObj }) => {
  const columnStyle = theme ? theme.columnStyle : {}
  return { ...baseStyle, ...columnStyle, ...styleObj }
})

export default Column
