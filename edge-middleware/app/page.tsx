import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-8">
      <Link href="/docs" className="mt-2 underline text-sky-400">
        Link is /docs and goes to /docs
      </Link>
      <Link href="/docs/" className="mt-2 underline text-sky-400">
        Link is /docs/ but goes to /docs
      </Link>
      <Link href="/foo" className="mt-2 underline text-sky-400">
        Go to /foo
      </Link>
      <Link href="/foo/" className="mt-2 underline text-sky-400">
        Go to /foo/
      </Link>
    </main>
  );
}
