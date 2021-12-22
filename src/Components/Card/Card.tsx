import styled from 'styled-components'
import { Trash } from '@styled-icons/ionicons-outline'
import { Edit } from '@styled-icons/boxicons-solid'
import { useRandomAvatar } from '../../CustomHooks/useRandomAvatar'
import { PropsType } from './Card.interfaces'

/*---> Components <---*/
const Card = ({
  name,
  description,
  handleEditIconClick,
  handleDeleteIconClick,
}: PropsType) => {
  return (
    <CardWrapper data-cy='card-item'>
      <HeaderWrapper>
        <DeleteIcon onClick={handleDeleteIconClick} data-cy='delete-icon' />
        <EditIcon onClick={handleEditIconClick} data-cy='edit-icon' />
      </HeaderWrapper>
      <AvatarWrapper>
        <Avatar
          src={useRandomAvatar() || '/avatar2.jpg'}
          alt='avatar'
          data-cy='card-avatar'
        />
      </AvatarWrapper>
      <Name data-cy='card-name'>{name}</Name>
      <Description data-cy='card-desc'>{description}</Description>
    </CardWrapper>
  )
}

/*---> Styles <---*/
const CardWrapper = styled.div`
  width: 400px;
  height: 336px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 64px;
  padding: 18px 32px 40px 32px;

  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.5);
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
`

const DeleteIcon = styled(Trash)<{ onClick: any }>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #979797;
`

const EditIcon = styled(Edit)<{ onClick: any }>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #979797;
  margin-left: 10px;
`

const AvatarWrapper = styled.div`
  text-align: center;
`

const Avatar = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 50%;
  object-fit: cover;
`

const Name = styled.p`
  font-family: Source Sans Pro SemiBold;
  font-size: 21px;
  line-height: 26px;
  margin-top: 28px;
`

const Description = styled.p`
  line-height: 20px;
  margin-top: 8px;
`

export default Card
