import styled from 'styled-components'
import { PropsType } from './MailTitle.interfaces'

/*---> Components <---*/
const MainTitle = ({ children, ...restProps }: PropsType) => {
  return <Title {...restProps}>{children}</Title>
}

/*---> Styles <---*/
const Title = styled.h1`
  /* border: 1px solid red; */
  font-size: 48px;
  line-height: 60px;
`
export default MainTitle
