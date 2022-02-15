import { Popover, Button, Typography } from '@material-ui/core'
import { Anchor } from '@mui/icons-material'
import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'

function Contactus() {
  const [pop, setpop] = useState(null)
  const openPopover = (e) => {
    setpop(e.currentTarget)
  }
  return (
    <div>
      <Button
        style={{ marginTop: 200, marginLeft: 200 }}
        variant='contained'
        color='success'
        onClick={openPopover}
      >Click me</Button>
      <Popover
        open={Boolean(pop)}
        anchorEl={pop}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'Left'
        }}
        onClose={() => setpop(null)}
      >
        <Typography variant='h5'>KAL ANA KAL</Typography>

      </Popover>
    </div>
  )
}

export default Contactus