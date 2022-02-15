import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia  from '@material-ui/core/CardMedia'
import { IconButton, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
function About() {
  return (
    <div>
      <Card                                                       >
        <CardHeader
          action={
            <IconButton aria-label='settings' >
              <DeleteOutlined />
            </IconButton>
          }
          title='Card'
          subheader='Category'
        />
         <CardMedia
        component="img"
        height="300"
        width={100}
        image="https://png.pngtree.com/png-clipart/20190925/original/pngtree-red-blue-vs-metal-font-png-image_4983552.jpg"
        alt="Paella dish"
      />
        <CardContent>
          <Typography>
            The standard Lorem Ipsum passage, used since the 1500s
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </CardContent>
      </Card>

    </div>
  )
}

export default About