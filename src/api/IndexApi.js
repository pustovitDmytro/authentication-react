/**
 * Created by pusti on 30.06.2017.
 */
import Api from './Api';

class IndexApi extends Api {
  getMenu({token}){
    return this.get(`content/`,{token});
  }
  authenticate(data){
    return this.post(`authenticate/`,data);
  }
}

export default IndexApi;
