import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import axios from "axios";

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat])
    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi. Nec nam aliquam sem et tortor consequat id.",
    //         img: "https://i.guim.co.uk/img/media/058db4fab429051f31297b6a86ced24973de111c/0_118_2817_1690/master/2817.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8e149d10c49d433ef26904850311dc1b"
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi. Nec nam aliquam sem et tortor consequat id.",
    //         img: "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi. Nec nam aliquam sem et tortor consequat id.",
    //         img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg"
    //     },
    // ]

  
    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map( (post) => (
                <div className="post" key={post.id}>
                    <img src={`../uploads/${post.img}`} alt="img"/>
                    <h2>{post.title}</h2>
                    <button><Link to={`/post/${post.id}`}>Read More</Link></button>
                </div>
            ) )}
        </div>
    )
}

export default Menu;