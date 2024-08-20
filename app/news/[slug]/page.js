import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default function NewsItemPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }
  
  return (
    <article id="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={300} height={300} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}