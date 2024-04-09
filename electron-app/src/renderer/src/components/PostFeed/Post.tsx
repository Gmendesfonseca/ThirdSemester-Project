import React from 'react'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material'
import { Checkbox } from '@mui/material'
import faker from 'faker'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const generateMockPost = () => ({
  avatarLabel: faker.name.firstName().charAt(0),
  title: faker.lorem.sentence(),
  subheader: faker.date.past().toDateString(),
  image: faker.image.imageUrl(),
  content: faker.lorem.paragraph(),
  method: Array.from({ length: 5 }, () => faker.lorem.sentence())
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Post = () => {
  const [expanded, setExpanded] = React.useState(false)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const data = generateMockPost()

  const ExpandMore = styled((props: ExpandMoreProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { expand, ...other } = props
    return <IconButton {...other} />
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  }))

  return (
    <Box flex={4} p={2}>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.avatarLabel}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={data.title}
          subheader={data.subheader}
        />
        <CardMedia component="img" height="20%" image={data.image} alt="Post Image" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            {data.method.map((step, index) => (
              <Typography paragraph key={index}>
                {step}
              </Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  )
}
