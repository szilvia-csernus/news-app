import Link from 'next/link';

export default function NewsPage() {

  return (
    <>
      <h1>News Page</h1>

      <ul className='news-list'>
        <li>
          <Link href={`/news/1`}>News Item 1</Link>
        </li>
        <li>
          <Link href={`/news/2`}>News Item 2</Link>
        </li>
        <li>
          <Link href={`/news/3`}>News Item 3</Link>
        </li>
      </ul>
    </>
  );
}