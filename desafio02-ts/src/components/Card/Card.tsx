import { Box, Flex, Text } from "@chakra-ui/react"
import { Form } from "../Form/Form"


export const Card = () => {
  return (
    <Box minHeight={'calc(100vh - 100px)'} backgroundColor='#9413dc' padding='25px'>
      <Flex flexDirection='row' justifyContent='center' alignItems='center'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width={{ base: '100%', lg: '40%' }} minHeight='250px' display='flex' flexDirection='column' gap='16px' >
          <Text fontSize='36px' textAlign='center' paddingBottom='16px' fontWeight='semibold'>Faça o login</Text>
          <Form />
        </Box>
      </Flex>
    </Box>
  )
}