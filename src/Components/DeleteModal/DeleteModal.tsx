import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import MainTitle from '../MainTitle/MainTitle'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { PropsType } from './DeleteModal.interfaces'
import { GET_ALL_USERS, DELETE_USER } from '../../GraphQLQueries/GraphQLQueries'

/*---> Components <---*/
const DeleteModal = ({
  setShowDeleteModal,
  activeCard,
  setActiveCard,
  limit,
  filterTerm,
}: PropsType) => {
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [
      { query: GET_ALL_USERS, variables: { filter: filterTerm, limit } },
    ],
  })

  const handleDelete = () => {
    deleteUser({ variables: { id: activeCard!.id } })
    setShowDeleteModal(false)
    setActiveCard(null)
  }

  const handleCancel = () => {
    setShowDeleteModal(false)
    setActiveCard(null)
  }

  return (
    <ModalWrapper data-cy='delete-modal'>
      <MainTitle>
        <span data-cy='delete-modal-title'>This will delete the user !</span>
      </MainTitle>
      <ButtonsWrapper>
        <PrimaryButton onClick={handleDelete} data-cy='delete-save-button'>
          YES, DELETE
        </PrimaryButton>
        <SecondaryButton onClick={handleCancel} data-cy='delete-cancel-button'>
          CANCEL
        </SecondaryButton>
      </ButtonsWrapper>
    </ModalWrapper>
  )
}

/*---> Styles <---*/
const ModalWrapper = styled.div`
  width: 750px;
  height: 300px;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 40px;

  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
`

export default DeleteModal
