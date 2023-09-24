export const hasSession = (): boolean => {
  if (localStorage.getItem('token')) return true
  return false;
}