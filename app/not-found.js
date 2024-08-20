import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div id="error">
      <h1>404 - Page Not Found</h1>
      <p> Go back to <Link href="/">Home</Link></p>
    </div>
  )
  ;
}