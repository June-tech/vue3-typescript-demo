import Cookies from 'js-cookie';

const TokenKey = 'token';
const RefreshTokenKey = 'refresh-token';

export function getToken(): string | undefined {
  return Cookies.get(TokenKey);
}
export function getTokenKey() : string {
  return TokenKey;
}
export function getRefreshTokenKey() : string {
  return RefreshTokenKey;
}

export function setToken(token: string) : string | undefined {
  return Cookies.set(TokenKey, token);
}

export function getRefreshToken(): string | undefined {
  return Cookies.get(RefreshTokenKey);
}

export function setRefreshToken(refreshToken: string) : string|undefined {
  return Cookies.set(RefreshTokenKey, refreshToken);
}

export const removeToken = (): void => {
  Cookies.remove(TokenKey);
  Cookies.remove(RefreshTokenKey);
};
