export const hasSession = (): boolean => {
  if (localStorage.getItem('token')) return true
  return false;
}

export const setUser = (user: any): void  => {
  localStorage.setItem('user', JSON.stringify(user))
}
export const getUserData = (): any  => {
  const user_data: any = localStorage.getItem('user');
  if (user_data)
    return JSON.parse(user_data)
  return null
}