import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser, setUser } from "../../../features/UserSlice";
import "./Third.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, provider } from "../../../utils/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import { setGoogleUser } from "../../../features/GoogleSlice";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";

export default function Third() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState([]);
  const history = useHistory();

  console.log(user);

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswrodChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginSbumit = (e) => {
    e.preventDefault();
    dispatch(
      setUser({
        name: name,
        email: email,
        password: password,
        logedIn: true,
      })
    );
  };

  const userRef = collection(db, "users");

  const handleDispatch = async (e) => {
    e.preventDefault();
    await addDoc(userRef, {
      username: name,
      password: password,
      lastname: email,
    });

    if (name === "" && email === "") {
      alert("Please fill in inputs");
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const userData = await getDocs(userRef);
      setUserData(userData?.docs?.map((u) => ({ ...u?.data(), id: u?.id })));
    };
    getUsers();
  }, []);

  console.log(userData);
  const gignInWithGoogle = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        console.log(credential);

        dispatch(setGoogleUser({ user: user }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div>
      <div class="signupSection">
        <form class="signupForm" onSubmit={(e) => handleLoginSbumit(e)}>
          <h2>Sign Up</h2>
          <ul class="noBullet">
            <li>
              <label for="username"></label>
              <input
                type="text"
                className="inputFields"
                id="username"
                name="username"
                placeholder="Username"
                value={name}
                onChange={handleNameChange}
              />
            </li>
            <li>
              <label for="password"></label>
              <input
                type="password"
                class="inputFields"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handlePasswrodChange}
                required
              />
            </li>
            <li>
              <label for="email"></label>
              <input
                type="email"
                className="inputFields"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </li>

            <li id="center-btn">
              <div>
                <Link to="/">
                  <button
                    type="submit"
                    className="button__for__blog"
                    name="join"
                    // id="join-btn"
                    style={{ marginBottom: 12 }}
                    alt="Join"
                    // onClick={handleDispatch}
                  >
                    Join
                  </button>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "transparent" }}
                  to="/blogs"
                >
                  <GoogleButton
                    style={{ zIndex: 3, marginBottom: 12 }}
                    onClick={gignInWithGoogle}
                  />
                </Link>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
