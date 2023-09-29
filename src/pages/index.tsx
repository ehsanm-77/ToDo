// import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gray-200 w-full h-full">
      <Link href={'/main'}>
        <button className="start bg-blue-400 px-3 py-2 text-white rounded-md hover:bg-blue-500 hover:shadow-md hover:transition-all font-bold">
          <div>Start</div>
        </button>
      </Link>
    </main>
  );
}
