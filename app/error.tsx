// app/error.tsx
'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <button
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}