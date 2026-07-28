"use client";

import { useState } from "react";
import { ProductGrid } from "./ProductGrid";
import { productCategories } from "@/lib/site";

type CategoryId = (typeof productCategories)[number]["id"];

export function ProductTabs() {
  const [active, setActive] = useState<CategoryId>(productCategories[0].id);

  return (
    <div>
      <div className="mb-[50px] flex flex-wrap justify-center gap-0 border-b-2 border-[#e8e8e8]" role="tablist" aria-label="Product lines">
        {productCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            id={`tab-btn-${cat.id}`}
            aria-selected={active === cat.id}
            aria-controls={`tab-${cat.id}`}
            onClick={() => setActive(cat.id)}
            className={`-mb-0.5 border-x-0 border-t-0 border-b-[3px] bg-none px-8 py-3.5 font-sans text-[15px] font-semibold uppercase tracking-[0.08em] transition-colors ${
              active === cat.id ? "border-gold text-gold" : "border-transparent text-mist hover:border-gold hover:text-gold"
            }`}
          >
            {cat.slug}
          </button>
        ))}
      </div>

      {productCategories.map((cat) => (
        <div key={cat.id} id={`tab-${cat.id}`} role="tabpanel" aria-labelledby={`tab-btn-${cat.id}`} hidden={active !== cat.id}>
          <ProductGrid items={cat.items} cols={cat.cols} href={`/products#${cat.id}`} linkLabel="Read more" />
        </div>
      ))}
    </div>
  );
}
