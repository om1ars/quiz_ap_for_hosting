import { Avatar } from "@material-ui/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../utils/firebase";

export default function Header() {
  const [user, loading] = useAuthState(auth);

  const Container = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    display: flex;

    p {
      color: white;
    }
  `;
  return (
    <div>
      <Container>
        <Avatar src={user?.photoURL} />
        <p>Welcome {user?.displayName}</p>
      </Container>
    </div>
  );
}
