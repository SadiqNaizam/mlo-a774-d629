import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-background">
      <h1 className="text-9xl font-extrabold text-primary tracking-tighter">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mt-4">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button asChild>
        <Link to="/">Go back to Home</Link>
      </Button>
    </div>
  )
}