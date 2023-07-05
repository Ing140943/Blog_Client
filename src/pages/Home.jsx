import React, {useState, useEffect  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios"

const Home = () => {

    const [posts, setPosts] = useState([])

    const cat = useLocation().search

    useEffect(() => {
        const fetchData = async ()=> {
            try {
                const res = await axios.get(`${process.env.SERVICES_PATH}/posts${cat}`)
                setPosts(res.data)
            }catch(err) {
                console.log(err);
            }
        }
        fetchData()
    }, [cat])   // This line means that whenever we change the category, it is gonna fire this function again and again 

    const cutText = (text) => {
        return text.slice(0, 500)+'...'
    }

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }
    return (
        <div className='home'>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt='content-img' />
                        </div>
                        <div className='content'>
                            <Link to={`${process.env.SERVICES_PATH}/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            {getText(post.desc).length >= 500? <p>{cutText(getText(post.desc))}</p>:<p>{getText(post.desc)}</p>}
                            <button><Link to={`${process.env.SERVICES_PATH}/post/${post.id}`}>Read More</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;