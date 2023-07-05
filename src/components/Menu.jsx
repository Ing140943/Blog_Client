import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import axios from "axios";

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_SERVICES_PATH}/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat])
  
    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map( (post) => (
                <div className="post" key={post.id}>
                    <img src={`${post.img}`} alt="img"/>
                    <h2>{post.title}</h2>
                    <button><Link to={`/post/${post.id}`}>Read More</Link></button>
                </div>
            ) )}
        </div>
    )
}

export default Menu;