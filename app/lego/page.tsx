'use client';
import Link from 'next/link';

export default function LegoLanding() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <header className="bg-red-600 text-white py-8 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-wider mb-2">LEGO SHOP</h1>
          <p className="text-lg">Discover endless building fun!</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-10 grid gap-12">
        <section className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-600">Create. Build. Imagine.</h2>
            <p className="mb-6 text-gray-700">Explore our latest sets and unleash your creativity with bricks of every color.</p>
            <Link href="#sets" className="inline-block bg-red-600 text-white px-6 py-3 rounded-md shadow hover:bg-red-700 transition-colors">Shop Now</Link>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-red-600 text-white flex items-center justify-center rounded-lg shadow-lg text-5xl font-bold">
              LEGO
            </div>
          </div>
        </section>

        <section id="sets" className="grid md:grid-cols-3 gap-6">
          {['City','Star Wars','Friends'].map((name) => (
            <div key={name} className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-40 h-40 bg-gray-200 mb-4 flex items-center justify-center rounded-md">{name}</div>
              <p className="mb-4 text-gray-700">Exciting {name} sets for all ages.</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">View</button>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Lego Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
