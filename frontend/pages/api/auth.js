import { signIn, signOut } from "next-auth/react";

export async function login(req, res) {
  signIn();
}

export async function logout(req, res) {
  signOut();
}

export async function signup(req, res) {
  res.status(200).send("Wela");
}

export async function deleteCognito(req, res) {
  res.status(200).send("Wela");
}
