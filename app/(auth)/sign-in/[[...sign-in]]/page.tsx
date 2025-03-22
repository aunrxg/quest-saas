import { SignIn } from "@clerk/nextjs";


export default function SignInPage() {
  return (
    <main className="h-screen flex w-full items-center justify-center">
      <SignIn />
    </main>
  )
}