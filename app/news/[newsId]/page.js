export default function NewsItemPage({ params }) {
  const newsId = params.newsId;
  return (
    <>
    <h1>News Item Page</h1>
    <h2>News Item {newsId}</h2>
    </>
  );
}