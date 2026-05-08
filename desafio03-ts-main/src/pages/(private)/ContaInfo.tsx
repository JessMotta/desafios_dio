import { Center, Spinner } from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"
import CardInfo from "../../components/CardInfo"
import { useContext } from "react"
import { AppContext } from "../../components/AppContext"

const ContaInfo = () => {
    const { userData, isLoggedIn, userId } = useContext(AppContext)
    const navigate = useNavigate()

    !isLoggedIn && navigate('/')


    console.log('Conta info - userId', userId)
    console.log('Conta info - userData', userData)
    return (
        <Center paddingTop={16}>

            {
                userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size='xl' color='white' />
                        </Center>
                    ) :
                    (
                        <>
                            <CardInfo mainContent={'Dados da conta'}
                                content={
                                    <>
                                        <strong>Nome:</strong> {userData.name}
                                        <br />
                                        <strong>E-mail:</strong> {userData.email}

                                    </>
                                } />
                        </>
                    )
            }

        </Center>
    )
}

export default ContaInfo
