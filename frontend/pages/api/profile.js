import makeRequest from "./request";

const url = "https://ksqms6y0n0.execute-api.us-east-1.amazonaws.com";
export const getProfile = async (req, res) => {
  const path = "/profile";
  console.log("andiamo");

  fetch(url + path, { method: "GET" })
    .then((response) => response.text())
    .then((res) => console.log("qualcosa successo", res));

  // makeRequest({
  //   url: "https://ksqms6y0n0.execute-api.us-east-1.amazonaws.com",
  //   params: {},
  //   method: "GET",
  //   pathTemplate: "",
  //   body: {},
  //   additionalParams: {},
  // }).then((res) => {
  //   console.log(res);
  // });
};

export const createProfile = async (profile, token) => {
  const path = "/profile/update";

  makeRequest({
    token,
    url: url + path,
    params: {},
    method: "POST",
    pathTemplate: "",
    body: profile,
    additionalParams: {},
  }).then((res) => {
    console.log(res);
  });

  // fetch(url + path, {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${token}`, // notice the Bearer before your token
  //   },
  //   body: JSON.stringify(profile),
  // })
  //   .then((response) => response.text())
  //   .then((res) => console.log("qualcosa successo", res));
};
