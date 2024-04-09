// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Box } from '@mui/system'
import { Post } from '../PostFeed/Post'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Feed = () => {
  return (
    <Box flex={4}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Post key={index} />
      ))}
    </Box>
  )
}
