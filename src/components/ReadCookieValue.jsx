import Cookie from 'cookie-universal';

export function ReadCookieValue({ name })
{
    let cookie = Cookie();
 
    return cookie.get(name);
}