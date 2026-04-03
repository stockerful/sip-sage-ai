import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md text-center px-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Oregon Wine Host</h1>
        <p className="text-xl text-gray-600 mb-12">
          AI-powered assistant for Oregon winery tasting rooms
        </p>
        
        <Link 
          href="/recommendations"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-medium transition-colors"
        >
          Open Tasting Room Assistant →
        </Link>

        <p className="mt-8 text-sm text-gray-500">
          Make sure your backend is running on port 8000
        </p>
      </div>
    </div>
  );
}
