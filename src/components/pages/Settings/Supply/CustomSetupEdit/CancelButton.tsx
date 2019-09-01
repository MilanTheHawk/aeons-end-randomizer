import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import CancelIcon from '@material-ui/icons/Cancel'

const CancelButton = React.memo((props: any) => (
  <IconButton
    className={props.className}
    color="secondary"
    aria-label="Cancel"
    onClick={props.onClick}
  >
    <CancelIcon />
  </IconButton>
))

const StyledCancelButton = styled(CancelButton)`
  position: absolute;
  top: -5px;
  right: -5px;
`

export default StyledCancelButton