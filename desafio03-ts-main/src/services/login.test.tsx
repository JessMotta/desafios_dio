import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockPassword = '123456'
    it('Deve fazer o login caso o email e a senha sejam válidos', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um alert caso o email e/ou senha sejam inválidos', async () => {
        const response = await login('email@invalido.com', '1234')
        expect(response).toBeFalsy()
    })
})