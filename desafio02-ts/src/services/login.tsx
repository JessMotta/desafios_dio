export const login = (username: string, password: string): void => {
    if (username === '' || password === '') {
        alert('Preencha seu usuário e/ou senha')
    } else {
        alert(`Bem vindo(a) ${username}!`)
    }


}
