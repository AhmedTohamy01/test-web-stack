import { useState } from 'react'
import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import MainTitle from '../MainTitle/MainTitle'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { PropsType } from './EditModal.interfaces'
import { UPDATE_USER, GET_ALL_USERS } from '../../GraphQLQueries/GraphQLQueries'

/*---> Components <---*/
const EditModal = ({
  setShowEditModal,
  activeCard,
  setActiveCard,
  limit,
  filterTerm,
}: PropsType) => {
  const [name, setName] = useState(activeCard!.name)
  const [address, setAddress] = useState(activeCard!.address)
  const [description, setDescription] = useState(activeCard!.description)

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [
      { query: GET_ALL_USERS, variables: { filter: filterTerm, limit } },
    ],
  })

  const handleSave = () => {
    updateUser({
      variables: {
        id: activeCard!.id,
        name,
        address,
        description,
      },
    })
    setShowEditModal(false)
    setActiveCard(null)
  }

  const handleCancel = () => {
    setShowEditModal(false)
    setActiveCard(null)
  }

  return (
    <ModalWrapper data-cy='edit-modal'>
      <MainTitle>
        <span data-cy='edit-modal-title'>Edit user</span>
      </MainTitle>
      <DataWrapper>
        <MapWrapper data-cy='edit-map-image'>
          <MapBox data-cy='edit-map-box'>MAP WITH ADDRESS</MapBox>
        </MapWrapper>
        <UserInfoWrapper>
          <FieldWrapper>
            <Label data-cy='edit-name-label'>Name</Label>
            <Input
              data-cy='edit-name-input'
              onChange={(event) => setName(event.target.value)}
              defaultValue={activeCard!.name}
              maxLength={50}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label data-cy='edit-address-label'>Address</Label>
            <Input
              data-cy='edit-address-input'
              onChange={(event) => setAddress(event.target.value)}
              defaultValue={activeCard!.address}
              maxLength={50}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label data-cy='edit-desc-label'>Description</Label>
            <Input
              data-cy='edit-desc-input'
              onChange={(event) => setDescription(event.target.value)}
              defaultValue={activeCard!.description}
              maxLength={50}
            />
          </FieldWrapper>
          <ButtonsWrapper>
            <PrimaryButton
              data-cy='edit-save-button'
              onClick={handleSave}
              disabled={name === '' || address === '' || description === ''}
            >
              SAVE
            </PrimaryButton>
            <SecondaryButton
              data-cy='edit-cancel-button'
              onClick={handleCancel}
            >
              CANCEL
            </SecondaryButton>
          </ButtonsWrapper>
        </UserInfoWrapper>
      </DataWrapper>
    </ModalWrapper>
  )
}

/*---> Styles <---*/
const ModalWrapper = styled.div`
  width: 1328px;
  height: 725px;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 64px;

  animation: anvil 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes anvil {
    0% {
      transform: scale(5) rotate(0);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    50% {
      transform: scale(1) rotate(-0.2deg);
      opacity: 1;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0.5);
    }
    75% {
      transform: scale(1) rotate(0.2deg);
      opacity: 1;
      box-shadow: 0 0 250px rgba(241, 241, 241, 0.5);
    }
    100% {
      transform: scale(1) rotate(0);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
`

const DataWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
`

const MapWrapper = styled.div`
  width: 518px;
  height: 336px;
  background: url('/map.png');
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MapBox = styled.div`
  width: 256px;
  height: 87px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  font-size: 18px;
  line-height: 23px;
  font-family: 'Source Sans Pro SemiBold';
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserInfoWrapper = styled.div``

const FieldWrapper = styled.div`
  margin-bottom: 26px;
`

const Label = styled.p`
  font-family: 'Source Sans Pro SemiBold';
  font-size: 18px;
  line-height: 23px;
`

const Input = styled.input`
  width: 621.5px;
  height: 64px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 8px;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  padding: 16px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
`

export default EditModal
