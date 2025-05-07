import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromise);
  console.log(categories);
  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <div className="grid grid-cols-1 gap-2 text-accent font-semibold">
        {categories.map((cat) => (
          <NavLink
            className="btn border-0 bg-white hover:bg-base-200"
            to={`/category/${cat.id}`}
            key={cat.id}
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
