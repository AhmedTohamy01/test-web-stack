import { useState } from 'react'
import styled from 'styled-components'
import MainTitle from '../MainTitle/MainTitle'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { PropsType } from './AddModal.interfaces'

/*---> Components <---*/
const AddModal = ({ setShowAddModal, limit }: PropsType) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')

  const handleSave = () => {
    setShowAddModal(false)
  }

  const handleCancel = () => {
    setShowAddModal(false)
  }

  return (
    <ModalWrapper>
      <MainTitle>Add user</MainTitle>
      <DataWrapper>
        <MapWrapper>
          <MapBox>MAP WITH ADDRESS</MapBox>
        </MapWrapper>
        <UserInfoWrapper>
          <FieldWrapper>
            <Label>Name</Label>
            <Input
              onChange={(event) => setName(event.target.value)}
              maxLength={50}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label>Address</Label>
            <Input
              onChange={(event) => setAddress(event.target.value)}
              maxLength={50}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label>Description</Label>
            <Input
              onChange={(event) => setDescription(event.target.value)}
              maxLength={50}
            />
          </FieldWrapper>
          <ButtonsWrapper>
            <PrimaryButton
              onClick={handleSave}
              disabled={name === '' || address === '' || description === ''}
            >
              SAVE
            </PrimaryButton>
            <SecondaryButton onClick={handleCancel}>CANCEL</SecondaryButton>
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

  animation: pop-swirl 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes pop-swirl {
    0% {
      transform: scale(0) rotate(360deg);
    }
    60% {
      transform: scale(0.8) rotate(-10deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
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

export default AddModal