import React from "react";

export default function FoodList({ title, children }) {
  return (
    <div>
      <section className="pb-7">
        <div className="container">
          <div className="py-5">
            <div className="flex justify-between items-center">
              <h2 className="md:text-xl lg:text-2xl font-bold text-gray-800">{title}</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
