import axios from 'axios';
import qs from 'qs'

require('dotenv').config();

const authUrl = 'https://accounts.spotify.com/api/token';
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const AuthService = {
    getToken: function() {
        let token = Buffer.from(clientId + ':' + clientSecret).toString('base64');
    
        let data = qs.stringify({
            'grant_type': 'client_credentials' 
           });
           
           const config = {
            method: 'post',
            url: authUrl,
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/x-www-form-urlencoded', 
              'Cookie': '__Host-device_id=AQAVearo3gSTMxD5JGMjeCqB364gfup1bE63IpZB4pZ2HH7TinJpqRy4Gjgweq38NiYH4_W07qB87CAaAJfTy_R5uNRqwKTqisM'
            },
            data : data
          };
          
          return axios(config)
    }
}

export default AuthService;