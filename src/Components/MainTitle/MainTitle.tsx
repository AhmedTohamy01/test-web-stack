import styled from 'styled-components'
import { PropsType } from './MailTitle.interfaces'

/*---> Components <---*/
const MainTitle = ({ children }: PropsType) => {
  return <Title>{children}</Title>
}

/*---> Styles <---*/
const Title = styled.h1`
  font-size: 48px;
  line-height: 60px;
`
export default MainTitle
