import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const filteredNews = data.filter((news) => {
      if (id == 0) {
        return news;
      } else if (id == 1) {
        return news.others.is_today_pick === true;
      } else {
        return news.category_id == id;
      }
    });
    setCategoryNews(filteredNews);
  }, [data, id]);

  return (
    <div>
      <h1 className="font-bold mb-5">
        Total{" "}
        <span className="text-secondary">{(id, categoryNews.length)}</span>{" "}
        Found
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
