// app/not-found.tsx
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Not Found</h2>
        <p className="mb-4">Could not find the requested resource</p>
        <Link 
          href="/"
          className="text-yellow-400 hover:text-yellow-300 underline"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}