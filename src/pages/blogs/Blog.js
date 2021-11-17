import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import styled from "styled-components";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { auth, db } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  CircularProgress,
  IconButton,
  LinearProgress,
} from "@material-ui/core";
import { FavoriteRounded, ThumbDown } from "@material-ui/icons";
import { setLiked } from "../../features/likedSlice";
import { setDisliked } from "../../features/dislikedSlice";
import { AddNavbar } from "../quiz/AddNavbar";
import { useHistory } from "react-router";
import Accodion from "../../components/quizComponents/liked&dislikedComponents/Accodion";

const Container = styled.div`
  position: relative;
`;
const CardContainer = styled.div``;
const Write = styled.div`
  /* position: fixed; */
  top: 95px;
  left: 35px;
`;

const CommentBox = styled.div`
  width: 600px;
  position: relative;
  float: right;
  form {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 25%;
    bottom: 5rem;
    right: 5rem;
    span {
      font-weight: 300;
      font-size: 13px;
    }

    input {
      border: none;
      width: 100%;
      border-bottom: 2px solid #ff5e62;
      outline: none;
      margin-top: 25px;
    }
    textarea {
      margin-bottom: 25px;
      border: none;
      border-right: 2px solid #ff5e62;
      border-left: 2px #ff5e62;
      border-bottom: 2px #ff5e62;
    }
  }
`;

function Blog() {
  const [user] = useAuthState(auth);
  const [showForm, setShowForm] = useState(false);
  const [userBlog, setUserBlog] = useState([]);
  const [name, setName] = useState(user?.email);
  const [fav, setFav] = useState(false);
  const [thumbDown, setThumbDown] = useState(false);
  const [comment, setComment] = useState("e.g: Thnks a lot it helped me much");
  const dispatch = useDispatch();

  const handleFav = (userBlog) => {
    setFav(!fav);
    dispatch(setLiked(userBlog));

    console.log(userBlog);
  };

  const handleThumbDown = (userBlog) => {
    setThumbDown(!thumbDown);
    dispatch(setDisliked(userBlog));
  };
  const blogsRef = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogsRef);

      setUserBlog(data?.docs?.map((d) => ({ ...d?.data(), id: d?.id })));
    };
    getBlogs();
  }, []);

  console.log(userBlog);

  const handleshow = () => {
    setShowForm(!showForm);
  };

  console.log(userBlog);

  if (showForm) {
    console.log(true, "here u go");
  }

  const createBlog = async (e) => {
    e.preventDefault();
    await addDoc(blogsRef, { desc: comment, name: name });
    setShowForm(showForm === false);
  };

  const userDesc = userBlog.map((u) => u?.desc);

  console.log(userDesc);
  const history = useHistory();

  const liked = useSelector((state) => state.liked.liked);

  console.log(liked);

  return (
    <>
      <CardContainer>
        <AddNavbar />
        <Write>
          <button
            className="button__for__blog"
            style={{ margin: "15px" }}
            onClick={handleshow}
          >
            I also want to write smth
          </button>
        </Write>
        <p style={{ margin: "15px", color: 'red', fontWeight: 800, fontSize: '22px'  }}>
          Please refresh page once after submiting. <br />Because Firstore is being
          used as an <br /> Database and it demands refresh after submission Sorry for
          that
        </p>
        {!userBlog ? (
          <p>Loading...</p>
        ) : (
          <>
            {userBlog.map((u) => (
              <>
                <Container>
                  <div class="wrapper">
                    <div class="blog_post">
                      <div class="img_pod">
                        <img src={user?.photoURL} />
                      </div>
                      <div class="container_copy">
                        <h3>{u?.time}</h3>
                        <h1>{u?.name}</h1>
                        <p>{u.desc}</p>
                      </div>
                      <div className="iconBx">
                        <IconButton onClick={() => handleFav(userBlog)}>
                          <FavoriteRounded
                            style={{ color: fav ? "red" : "gray" }}
                          />
                        </IconButton>
                        <IconButton onClick={() => handleThumbDown(userBlog)}>
                          <ThumbDown
                            style={{ color: thumbDown ? "yellow" : "gray" }}
                          />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </Container>
                ;
              </>
            ))}
          </>
        )}

        {showForm && (
          <CommentBox>
            <form>
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ color: "black", fontSize: "20px", fontWeight: "600" }}
                type="text"
              ></input>
              <span style={{ margin: "5", color: "gray" }}>
                Leave a comment
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ color: "black", fontSize: "20px", fontWeight: "600" }}
              />
              <span style={{ margin: "5px", color: "gray" }} type="text">
                Name
              </span>

              <button
                onClick={createBlog}
                className="button__for__blog"
                type="submit"
                style={{ margin: "15px" }}
              >
                Submit
              </button>
            </form>
          </CommentBox>
        )}
      </CardContainer>
      <Accodion />
    </>
  );
}

export default Blog;
