import { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const ModalOverlay = ({ children }: PropsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`

/*---> Interfaces <---*/
interface PropsType {
  children: ReactNode
  onClick?: () => void
}

export default ModalOverlay
