import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { KeyboardBackspaceOutlined } from "@material-ui/icons";
import { collection, getDocs } from "@firebase/firestore";
import { auth, db } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { removeUser } from "../../features/UserSlice";

const Container = styled.div`
  width: 100%;
  padding-top: 3px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: #00a1ba;
  padding-bottom: 3px;

  p {
    font-weight: 700;
    font-size: 22px;
    margin-left: 25px;
  }
`;

const Login = styled.div``;

export const AddNavbar = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [navbarUser, setNavbarUser] = useState("user");
  const history = useHistory();

  const navbarUserRef = collection(db, "users");

  useEffect(() => {
    const getNavbarUser = async () => {
      const navbarUserMain = await getDocs(navbarUserRef);
      setNavbarUser(
        navbarUserMain?.docs?.map((d) => ({ ...d?.data(), id: d?.id }))
      );
    };
    getNavbarUser();
  }, []);

  console.log(navbarUser);

  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div>
      <Container>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <KeyboardBackspaceOutlined />
        </Link>
        <p>
          This is website has no responsive quality. Only available on laptops
          or screens which are hight than 760px
        </p>
        <Login>
          {navbarUser ? (
            <div
              div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/login">
                <button
                  style={{ display: "flex", alignItems: "center" }}
                  // onClick={() => history.push("/login")}
                  className="button__for__blog"
                >
                  {user?.displayName}
                </button>
              </Link>

              <a
                onClick={() => handleLogout()}
                style={{ marginLeft: 12, cursor: "pointer" }}
              >
                Log out
              </a>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button
                  onClick={() => history.push("/login")}
                  className="button__for__blog"
                >
                  Login
                </button>
              </Link>
            </>
          )}
        </Login>
      </Container>
    </div>
  );
};
