import {environment} from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const apiUnisexMensUrl = baseUrl + '/unisexMens'
export const apiCsk=baseUrl +'/csk'
export const apiPosters=baseUrl + '/posters'
export const apiWomens=baseUrl + '/womens'
export const apiAccessories=baseUrl + '/accessories'
export const cartUrl = baseUrl + '/carts'
export const wishlistUrl = baseUrl + '/wishlist'
export const loginUrl=baseUrl + '/login'
export const registerUrl=baseUrl + '/register'
