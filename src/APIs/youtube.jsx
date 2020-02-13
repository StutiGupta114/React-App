import axios from 'axios';

const KEY = 'AIzaSyCEznSYADWVseS70CPDqx0qd9aV-3zj_Kc';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});