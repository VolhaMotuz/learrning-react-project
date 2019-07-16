import React from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../globals';

class PostsService extends React.Component {
    getPosts() {
        return axios.get(BASE_API_URL);
    }
}

export default PostsService;