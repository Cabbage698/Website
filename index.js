import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Creation Downloads</h1>
      <p>Browse and download unique files created by me and other contributors.</p>
      <Link href="/downloads">
        <a>Browse Downloads</a>
      </Link>
    </div>
  );
}
