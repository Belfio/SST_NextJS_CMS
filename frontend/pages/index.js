import { useState } from "react";
import { useSession } from "next-auth/react";
import LoginBtn from "../components/login-btn";
import { getProfile, createProfile } from "./api/profile";
export default function App() {
  const [count, setCount] = useState(null);
  const { data } = useSession();

  return (
    <div className="App">
      <LoginBtn />
      <button
        onClick={() => {
          console.log(data);
        }}
        style={{ backgroundColor: "green" }}
      >
        CLICCAMIIII{" "}
      </button>

      <button
        onClick={() => {
          getProfile(data.accessToken);
        }}
        style={{ backgroundColor: "blue" }}
      >
        getProfile
      </button>

      <button
        onClick={() => {
          createProfile({ name: "paolo" }, data.idToken);
        }}
        style={{ backgroundColor: "blue" }}
      >
        postProfile
      </button>
    </div>
  );
}
