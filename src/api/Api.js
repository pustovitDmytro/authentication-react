/**
 * Created by pusti on 30.06.2017.
 */
import fetch from 'isomorphic-fetch';
class Api {
  constructor(){
    this.domain = 'http://localhost:8080/api';
  }
  fetch(url, params={}){
    return fetch(url, params)
        .then((response)=>{
      if (!response.ok) {
        throw response.status;
      }
      return response;
    });
  }
  get(url, {token}) {
    return this.fetch(this.domain + '/' + url, {
      method: 'GET',
      headers: new Headers({'Authorization': token})
    });
  }
  post(url, data){
    let formData = new FormData();
    for(const key in data) {
        if (!data.hasOwnProperty(key))
            continue;
        formData.set(key, data[key]);
    }
    return this.fetch(this.domain +'/' + url, {
      method: 'POST',
      body: formData
    });
  }
  delete(url, id){
    return this.fetch(`${this.domain}/${url}${id}`, {
      method: 'DELETE'
    });
  }
}
export default Api;
