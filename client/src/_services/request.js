

function request(url, options = {}, data) {
  if(data) options.body = JSON.stringify(data);
  options.mode = 'cors'

    return fetch(url, options)
}

const headers = {
    'content-type': 'application/json'
  };
  

export const get = (url, options = { }) => request(url, { method: 'GET', ...options });
export const post = (url, data) => request(url, { method: 'POST', headers }, data);
export const put = (url, data) => request(url, { method: 'PUT', headers }, data);
export const del = (url, data) => request(url, { method: 'DELETE', headers }, data);
export const exGet = url => fetch(url);