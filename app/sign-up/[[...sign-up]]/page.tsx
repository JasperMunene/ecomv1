import { SignUp } from "@clerk/nextjs";

export default function page() {
    return (
    <div className="flex flex-col items-center justify-center gap-12 p-12">
    <SignUp path="/sign-up" appearance={{
      elements: {
        rootBox: 'mx-auto pt-12',
        formButtonPrimary: {
          backgroundColor: '#22c55e'
        }
      }
    }} />
    </div>)
}