import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/quizComponents/MainPage";
import { selectUser } from "./features/UserSlice";
import Authror from "./pages/author/Authror";
import Blog from "./pages/blogs/Blog";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/LoginPage";
import { AddNavbar } from "./pages/quiz/AddNavbar";
import Quiz from "./pages/quiz/Quiz";
import { auth, db } from "./utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Endpoints, Options } from "./test";
import axios from "axios";
import Credits from "./components/Credits";

function App() {
  const [user, loading] = useAuthState(auth);

  const [name, setName] = useState([]);
  const [res, setRes] = useState([]);

  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setName(data?.docs?.map((d) => [{ ...d?.data(), id: d?.id }]));
    };

    getUsers();
  }, []);

  const getTest = async () => {
    axios({
      method: "POST",
      url: "https://random-data-api.com/api/omniauth/twitter_post",
      data: {
        title: "Hey",
        completed: false,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTest();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/blogs" component={Blog} />
          <Route path="/author" component={Authror} />
          <Route path="/start" component={MainPage} />


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
