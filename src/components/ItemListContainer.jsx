import React from 'react'
import { Center, Square, Circle } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <Center bg='black' h='100px' color='white'>
        {greeting}
</Center></div>
  )
}

export default ItemListContainer