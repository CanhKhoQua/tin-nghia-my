import TransitionLink from "@/components/transition-link";
import { Article } from "@/types";

function NewsCard({ image, title, timeAgo, id, description }: Article) {
  return (
    <TransitionLink to={`/news/${id}`}>
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="aspect-[4/3] w-full">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium line-clamp-2 mb-2 text-gray-800">
          {title}
        </h3>
        <div className="text-xs text-gray-600 line-clamp-3 mb-1 leading-relaxed">{description}</div>
        <div className="text-xs text-gray-500 text-right">
          {timeAgo}
        </div>
      </div>
    </div>
    </TransitionLink>
  );
}

export default NewsCard;