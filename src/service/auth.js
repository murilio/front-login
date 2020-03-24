export const TOKEN_KEY = '@shopsogo-token'
export const TOKEN_KEY_USER = '@shopsogo-user'
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const profile = () => JSON.parse(localStorage.getItem(TOKEN_KEY_USER))

export const login = (token, user) => {
    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(TOKEN_KEY_USER, JSON.stringify(user))
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}
