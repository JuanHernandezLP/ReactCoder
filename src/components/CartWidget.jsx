import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
         <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='red'><span className="material-symbols-outlined">
                shopping_cart</span>Comprar {5}</Button>
         </ButtonGroup>
    </div>
  )
}

export default CartWidget