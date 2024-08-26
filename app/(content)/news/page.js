
import NewsList from '@/components/news-list';

export default async function NewsPage() {
  
  const response = await fetch('http://localhost:8080/news');
  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>

      <NewsList news={news} />
    </>
  );
}