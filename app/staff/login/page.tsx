'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Coffee, Lock, User } from 'lucide-react'
import Link from 'next/link'

export default function StaffLogin() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple authentication (replace with real auth in production)
    if (credentials.email === 'staff@caffevo.in' && credentials.password === 'demo123') {
      localStorage.setItem('staffAuth', 'true')
      router.push('/staff/orders')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-dark to-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-lg">
              <Coffee className="w-9 h-9 text-white" />
            </div>
          </Link>
          <h1 className="font-script text-4xl text-white mb-2">Caffévo</h1>
          <p className="text-gold font-bold">Staff Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-black text-primary mb-6 text-center">Staff Login</h2>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-semibold">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-accent text-white py-3 rounded-xl font-bold hover:shadow-glow transition-all"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-accent font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
          <p className="text-white text-sm font-semibold mb-2">Demo Credentials:</p>
          <p className="text-gold text-xs">Email: staff@caffevo.in</p>
          <p className="text-gold text-xs">Password: demo123</p>
        </div>
      </div>
    </div>
  )
}
