import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const App = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSession = async () => {
    const token = localStorage.getItem("session");
    if (token) {
      const user = await getUserInfo(token);
      if (user) setSession(user);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSession();
  }, []);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("session", token);
      window.location.replace(window.location.origin);
    }
  }, []);

  const getUserInfo = async (session) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/session`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session}`,
          },
        }
      );
      return response.json();
    } catch (error) {
      alert(error);
    }
  };

  const getPoba = async () => {
    const token = localStorage.getItem("session");
    console.log("GetPoba");
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/poba`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("SUCCAA", data);
        });

      return "opla";
    } catch (error) {
      alert(error);
    }
  };

  const signOut = async () => {
    localStorage.clear("session");
    setSession(null);
  };

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h2>SST Auth Example</h2>
      {session ? (
        <div className="profile">
          <p>Welcome {session.email}!</p>
          <p>{JSON.stringify(session)}</p>
          <img
            src={session.picture}
            style={{ borderRadius: "50%" }}
            width={100}
            height={100}
            alt=""
          />
          <p>{session.email}</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <Flex>
            <a
              href={`${import.meta.env.VITE_APP_API_URL}/auth/google/authorize`}
              rel="noreferrer"
            >
              <Button>Sign in with Google</Button>
            </a>
          </Flex>
          <Flex>
            <a
              href={`${import.meta.env.VITE_APP_API_URL}/auth/link/authorize`}
              rel="noreferrer"
            >
              <Button>Sign in with Link</Button>
            </a>
          </Flex>
        </div>
      )}

      <div>
        <button onClick={getPoba}>POBA</button>
      </div>
    </div>
  );
};

export default App;