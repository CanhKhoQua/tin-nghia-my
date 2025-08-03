import { EmptyPage } from "@/components/empty";
import { newsByIdState } from "@/state";
import { useAtomValue } from "jotai";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const { newsId } = useParams();
  const news = useAtomValue(newsByIdState(Number(newsId)));

  if (!news) {
    return <EmptyPage />;
  }

  return (
    <div
      className="flex w-full flex-col gap-4 p-4 text-sm leading-[150%]"
      dangerouslySetInnerHTML={{ __html: news.content }}
    />
  );
}

export default ArticlePage;
