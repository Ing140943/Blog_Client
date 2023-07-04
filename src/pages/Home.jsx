import React, {useState, useEffect  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios"

const Home = () => {

    const [posts, setPosts] = useState([])

    // const location = useLocation();
    // console.log(location);

    const cat = useLocation().search

    useEffect(() => {
        const fetchData = async ()=> {
            try {
                const res = await axios.get(`/posts${cat}`)
                setPosts(res.data)
            }catch(err) {
                console.log(err);
            }
        }
        fetchData()
    }, [cat])   // This line means that whenever we change the category, it is gonna fire this function again and again 


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
                            <img src={`../uploads/${post.img}`} alt='content-img' />
                        </div>
                        <div className='content'>
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p> 
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;