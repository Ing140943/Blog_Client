import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  console.log("This is state");
  console.log(state);
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(state?.img || null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`${process.env.SERVICES_PATH}/upload`, formData);
      setFile(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`${process.env.SERVICES_PATH}/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: imgUrl || file,
          })
        : await axios.post(`${process.env.SERVICES_PATH}/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <div className="img">
            <img
            //   src={`http://localhost:3000/uploads/${file}`}
            src={`${process.env.SERVICES_PATH}/uploads/${file}`}
              alt="click to upload the new image"
            />
          </div>
          {file ? <p><b>Status:</b> ready to publish</p>:<p>Nothing change</p>}
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            value=""
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "action"}
              name="cat"
              value="action"
              id="action"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="action">Action</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "sci-fi"}
              name="cat"
              value="sci-fi"
              id="sci-fi"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="sci-fi">Sci-Fi</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "romance"}
              name="cat"
              value="romance"
              id="romance"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="romance">Romance</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "robot"}
              name="cat"
              value="robot"
              id="robot"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="robot">Robot</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "fantasy"}
              name="cat"
              value="fantasy"
              id="fantasy"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="fantasy">Fantasy</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "others"}
              name="cat"
              value="others"
              id="others"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="others">Others</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
