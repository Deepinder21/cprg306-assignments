"use client";
import { useUserAuth } from "./_utils/auth-context.js";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  console.log(user);
  return (
    <div>
      <h1>week 8</h1>
      <p>{user ? "Hi their!" : "Not Signed In"}</p>
      <p>{user?.email}</p>
      <p>
        {user ? (
          <button onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In with gitHub</button>
        )}
      </p>
    </div>
  );
}