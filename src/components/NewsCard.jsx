import React from "react";
import { FiEye } from "react-icons/fi";
import { FaBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating: { number: ratingNumber },
    total_view,
    author: { name: authorName, published_date, img },
    thumbnail_url,
    details,
  } = news;

  const publishedDate = published_date
    ? format(new Date(published_date), "yyyy-MM-dd")
    : "N/A";

  return (
    <div className="bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 rounded-xl">
      <div className="flex items-center justify-between mb-2 rounded-md bg-gray-100 p-2">
        <div className="flex items-center gap-2">
          <img
            src={img}
            alt={authorName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-700">{authorName}</p>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaBookmark className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" />
          <FaShareAlt className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
      <div className="p-4">
        <h2 className="card-title text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
          {title}
        </h2>
        {thumbnail_url && (
          <figure className="mb-4">
            <img
              src={thumbnail_url}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </figure>
        )}
        <div>
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}
              {"... "}
              <span className="cursor-pointer hover:text-amber-500 font-semibold">
                Read More
              </span>
            </>
          ) : (
            <>{details}</>
          )}
        </div>
        <div className="flex items-center gap-1 my-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              size={16}
              color={i < ratingNumber ? "#f59e0b" : "#d1d5db"}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">{ratingNumber}</span>
        </div>

        <div className="flex items-center gap-4 my-2">
          <div className="flex items-center gap-1 text-gray-500">
            <FiEye size={16} className="w-4 h-4" />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
        <div className="mt-4">
          <Link
            to={`/newsDetails/${id}`}
            className="text-blue-500 hover:underline text-sm"
            href="#"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
