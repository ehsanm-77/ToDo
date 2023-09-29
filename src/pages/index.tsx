import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gray-200 w-full h-full">
      <Link href={'/main'}>
        <button className="start bg-blue-400 px-4 py-3 text-white rounded-md hover:bg-blue-500 hover:shadow-md hover:transition-all text-2xl font-bold">
          <div>Start</div>
        </button>
      </Link>
    </main>
  );
}
