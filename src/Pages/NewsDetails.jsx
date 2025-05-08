import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import NewsDetailsCard from "../NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const SingleNews = data.find((n) => n.id == id);
    setNews(SingleNews);
  }, [data, id]);

  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">Dragon News</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
