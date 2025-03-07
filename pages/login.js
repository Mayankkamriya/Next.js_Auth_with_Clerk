import { useUser, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { db, setDoc, doc } from "../lib/firebase";

export default function Login() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      const saveUserToDB = async () => {
        try {
          await setDoc(doc(db, "users", user.id), {
            id: user.id,
            name: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
            avatar: user.imageUrl,
            createdAt: new Date(),
          });
          console.log("User saved to Firestore!");
        } catch (error) {
          console.error("Error saving user: ", error);
        }
      };

      saveUserToDB();
    } else {
      router.push("/"); // Redirect to home if not logged in
    }
  }, [isSignedIn, user, router]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {user?.fullName}</h1>
      <img src={user?.imageUrl} alt="User Avatar" width="100" />
      <p>Email: {user?.primaryEmailAddress.emailAddress}</p>

      <SignOutButton>
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Logout
        </button>
      </SignOutButton>
    </div>
  );
}
