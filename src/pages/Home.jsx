import React, {useState, useEffect  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios"

const Home = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    const cat = useLocation().search

    useEffect(() => {
        const fetchData = async ()=> {
            try {
                const res = await axios.get(`${process.env.REACT_APP_SERVICES_PATH}/posts${cat}`)
                console.log(res.data);
                setPosts(res.data)
                setLoading(false);
            }catch(err) {
                console.log(err);
                setLoading(false);
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

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (posts.length === 0) {
        return <div>No posts found.</div>;
      }

    return (
        <div className='home'>
            <div className='posts'>
                {posts?.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt='content-img' />
                        </div>
                        <div className='content'>
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            {getText(post.desc).length >= 500? <p>{cutText(getText(post.desc))}</p>:<p>{getText(post.desc)}</p>}
                            <button><Link to={`/post/${post.id}`}>Read More</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;