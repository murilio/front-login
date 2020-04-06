export const TOKEN_KEY = '@shopsogo-token'
export const APPLICATION_KEY = '@shopsogo-application'
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const getUser = () => localStorage.getItem(APPLICATION_KEY)

export const login = (token, user_id) => {
    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(APPLICATION_KEY, user_id)
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}
