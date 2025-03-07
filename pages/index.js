import { SignInButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (isSignedIn) {
    router.push("/login"); // Redirect logged-in users to login page
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Home</h1>
      <SignInButton mode="redirect">
        <button style={{ padding: "10px 20px", fontSize: "16px", marginRight: "10px" }}>
          (Login with Google)
        </button>
      </SignInButton>


      <button
        style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}
        onClick={() => router.push("/about")}
      >
        Go to About Page
      </button>
    </div>
  );
}
