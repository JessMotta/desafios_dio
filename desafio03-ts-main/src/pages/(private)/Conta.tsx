import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouteLink } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import CardInfo from "../../components/CardInfo"
import { AppContext } from "../../components/AppContext"



const Conta = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn, userData, userId } = useContext(AppContext)

    !isLoggedIn && navigate('/')



    const actualData = new Date()

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <>
            <Center>
                <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                    {
                        userData === undefined || userData === null ?
                            (
                                <Center>
                                    <Spinner size='xl' color='white' />
                                </Center>
                            ) :
                            (
                                <>
                                    <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                                    <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`} />
                                </>
                            )
                    }
                </SimpleGrid>
            </Center>
            {userData === undefined || userData === null ? (
                <></>
            ) : (
                <Center marginTop={24}>
                    <ChakraLink
                        as={RouteLink}
                        to={`/infoconta/${userId}`}
                        backgroundColor={"white"} padding={2} rounded={8} _hover={{ textDecoration: 'none' }}>Ver dados da conta</ChakraLink>
                </Center>
            )}

        </>
    )
}

export default Conta
