import { useAtomValue } from "jotai";
import { articlesState } from "@/state";
import { Suspense } from "react";
import NewsCard from "./news-card";

function NewsPage() {
    return (
        <div className="flex w-full flex-col space-y-6 py-4 px-4">
            <div className="flex items-center justify-between mb-4">
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <NewsContent />
            </Suspense>
        </div>
    );
}

function NewsContent() {
    const articles = useAtomValue(articlesState);

    return (
        <div className="grid grid-cols-1 gap-3">
            {articles.slice(0, 6).map((item, index) => (
                <NewsCard key={index} {...item} />
            ))}
        </div>
    );
}

export default NewsPage;
