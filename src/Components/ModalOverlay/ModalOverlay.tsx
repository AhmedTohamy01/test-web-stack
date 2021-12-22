import styled from 'styled-components'
import { PropsType } from './ModalOverlay.interfaces'

/*---> Component <---*/
const ModalOverlay = ({ children }: PropsType) => {
  return <Wrapper data-cy='modal-overylay'>{children}</Wrapper>
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

export default ModalOverlay
