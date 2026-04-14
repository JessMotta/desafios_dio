import { Button } from '@chakra-ui/react'

interface ISubmitButton {
    textButton: string
    loginButton: () => void
}


export const SubmitButton = ({ textButton, loginButton }: ISubmitButton) => {
    return (
        <Button onClick={loginButton} colorScheme='orange' size='md' width='100%' marginTop='5px'>
            {textButton}
        </Button>
    )
}
