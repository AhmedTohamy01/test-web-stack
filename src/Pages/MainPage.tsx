import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { AddCircle } from '@styled-icons/ionicons-outline'
import MainTitle from '../Components/MainTitle/MainTitle'
import SearchBox from '../Components/SearchBox/SearchBox'
import Card from '../Components/Card/Card'
import PrimaryButton from '../Components/PrimaryButton/PrimaryButton'
import ModalOverlay from '../Components/ModalOverlay/ModalOverlay'
import EditModal from '../Components/EditModal/EditModal'
import DeleteModal from '../Components/DeleteModal/DeleteModal'
import AddModal from '../Components/AddModal/AddModal'
import { CardType } from '../utils/Shared.interfaces'
import { GET_ALL_USERS } from '../GraphQLQueries/GraphQLQueries'

/*---> Components <---*/
const MainPage = () => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [activeCard, setActiveCard] = useState<CardType | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  const search = useLocation()
  const urlNum = search.pathname.split('=')[1]
  const [limit, setLimit] = useState(parseInt(urlNum))
  const history = useHistory()
  const { loading, error, data } = useQuery(GET_ALL_USERS, {
    variables: { filter: filterTerm, limit: limit },
  })

  const handleEditIconClick = (item: CardType) => {
    setActiveCard(item)
    setShowEditModal(true)
  }

  const handleDeleteIconClick = (item: CardType) => {
    setActiveCard(item)
    setShowDeleteModal(true)
  }

  const handleLoadMore = () => {
    setLimit(limit + 6)
    const updatedurlNum = limit + 6
    history.push(`/limit=${updatedurlNum}`)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const handleFilterTerm = () => {
        setFilterTerm(searchTerm)
      }
      handleFilterTerm()
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('search-box')?.focus()
    }, 400)
  }, [filterTerm])

  if (loading)
    return (
      <SpinnerWrapper>
        <Loader type='ThreeDots' color='#3f51b5' height={200} width={200} />
      </SpinnerWrapper>
    )

  if (error)
    return (
      <SpinnerWrapper>
        <SorryImage src='/sorry.png' alt='shy girl' />I don't know how to say
        this to you ... <br />
        But, we couldn't contact the server to get data, please try again later
        !
      </SpinnerWrapper>
    )

  if (data.users.length === 0)
    return (
      <PageWrapper>
        <ContentWrapper>
          <HeaderWrapper>
            <MainTitle>
              <span data-cy='main-title'>Users list</span>{' '}
              <AddIcon
                onClick={() => setShowAddModal(true)}
                data-cy='add-icon'
              />
            </MainTitle>
            <SearchBox
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterTerm={filterTerm}
            />
          </HeaderWrapper>
          <CardsWrapper>
            <NoDataWrapper>
              <SorryImage
                src='/sorry.png'
                alt='shy girl'
                data-cy='no-data-image'
              />{' '}
              <span data-cy='no-data-title'>
                Sorry, We did not find any data !
              </span>
            </NoDataWrapper>
          </CardsWrapper>
          {showAddModal ? (
            <ModalOverlay>
              <AddModal
                setShowAddModal={setShowAddModal}
                limit={limit}
                filterTerm={filterTerm}
              />
            </ModalOverlay>
          ) : null}
        </ContentWrapper>
      </PageWrapper>
    )

  return (
    <PageWrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <MainTitle>
            <span data-cy='main-title'>Users list</span>{' '}
            <AddIcon onClick={() => setShowAddModal(true)} data-cy='add-icon' />
          </MainTitle>
          <SearchBox
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterTerm={filterTerm}
          />
        </HeaderWrapper>
        <CardsWrapper>
          {data?.users.map((item: CardType) => (
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              handleEditIconClick={() => handleEditIconClick(item)}
              handleDeleteIconClick={() => handleDeleteIconClick(item)}
            />
          ))}
        </CardsWrapper>
        {limit > data.users.length ? null : (
          <PrimaryButton onClick={handleLoadMore} data-cy='loadmore-button'>
            LOAD MORE
          </PrimaryButton>
        )}
        {showAddModal ? (
          <ModalOverlay>
            <AddModal
              setShowAddModal={setShowAddModal}
              limit={limit}
              filterTerm={filterTerm}
            />
          </ModalOverlay>
        ) : null}
        {showEditModal ? (
          <ModalOverlay>
            <EditModal
              setShowEditModal={setShowEditModal}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
              limit={limit}
              filterTerm={filterTerm}
            />
          </ModalOverlay>
        ) : null}
        {showDeleteModal ? (
          <ModalOverlay>
            <DeleteModal
              setShowDeleteModal={setShowDeleteModal}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
              limit={limit}
              filterTerm={filterTerm}
            />
          </ModalOverlay>
        ) : null}
      </ContentWrapper>
    </PageWrapper>
  )
}

/*---> Styles <---*/
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
  padding: 193px 236px;
  width: 1800px;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardsWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 37px;
`

const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 37px;
`

const SorryImage = styled.img`
  width: 240px;
`

const AddIcon = styled(AddCircle)`
  width: 100px;
  height: 100px;
  cursor: pointer;
  color: #979797;
  margin-left: 10px;
`

export default MainPage
