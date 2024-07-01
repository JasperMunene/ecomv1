import { SignIn } from "@clerk/nextjs";

export default function page() {
    return (
    <div className="flex flex-col items-center justify-center gap-12 p-12">
    <SignIn path="/sign-in" appearance={{
      elements: {
        rootBox: 'mx-auto pt-12',
        formButtonPrimary: {
          backgroundColor: '#22c55e'
        }
      }
    }} />
    </div>)
}