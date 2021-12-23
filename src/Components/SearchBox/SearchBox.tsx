import styled from 'styled-components'
import { CloseCircle } from '@styled-icons/ionicons-outline'
import { PropsType } from './SearchBox.interfaces'

/*---> Components <---*/
const SearchBox = ({ searchTerm, setSearchTerm, filterTerm }: PropsType) => {
  return (
    <SearchBoxWrapper>
      <Input
        data-cy='search-box'
        id='search-box'
        placeholder='Search ...'
        autoComplete='off'
        defaultValue={filterTerm}
        value={searchTerm || ''}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <CloseIcon
        searchTerm={searchTerm}
        onClick={() => {
          setSearchTerm('')
          window.location.reload()
        }}
      />
    </SearchBoxWrapper>
  )
}

/*---> Styles <---*/
const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 400px;
  height: 64px;
  padding: 16px;
  font-size: 24px;
  font-weight: normal;

  ::placeholder {
    font-size: 24px;
    line-height: 30px;
  }
`

const CloseIcon = styled(CloseCircle)<{ searchTerm: string }>`
  margin-left: -35px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #979797;
  display: ${(props) => (props.searchTerm ? 'initial' : 'none')};
`

export default SearchBox
