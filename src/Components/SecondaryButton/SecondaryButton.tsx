import styled from 'styled-components'
import { PropsType } from './SecondaryButton.interfaces'

/*---> Components <---*/
const SecondaryButton = ({ children, ...restProps }: PropsType) => {
  return (
    <ButtonWrapper>
      <Button {...restProps}>{children}</Button>
    </ButtonWrapper>
  )
}

/*---> Styles <---*/
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  font-family: Source Sans Pro SemiBold;
  width: 280px;
  height: 90px;
  cursor: pointer;
  border: 4px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 24px;
  line-height: 30px;

  :hover {
    border: 4px solid rgba(0, 0, 0, 0.4);
  }

  :focus {
    border: 4px solid rgba(0, 0, 0, 0.5);
  }
`

export default SecondaryButton
