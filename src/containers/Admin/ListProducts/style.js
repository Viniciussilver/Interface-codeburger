import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
  padding: 20px;
  width: 100%;

  img {
    width: 70px;
    border-radius: 5px;
  }
`

export const IconFalse = styled(CancelIcon)`
  color: red;
`
export const IconTrue = styled(CheckBoxIcon)`
  color: green;
`

export const Edit = styled(EditIcon)`
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`
