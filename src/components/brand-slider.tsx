import { brandsState, productsByCategoryState } from "@/state";
import { useAtomValue } from "jotai";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function BrandSlider() {
  const { categoryId } = useParams();
  const brands = useAtomValue(brandsState);
  const products = useAtomValue(productsByCategoryState(categoryId));
  const [selectedBrandId, setSelectedBrandId] = useState<number | null>(null);

  const brandIds = Array.from(
    new Set(products.map((p) => p.brandId).filter((id) => id != null))
  );
  const categoryBrands = brands.filter((b) => brandIds.includes(b.id));

  if (categoryBrands.length === 0) return null;

  return (
    <div className="px-3 py-2 overflow-x-auto flex space-x-2">
      <button
        className={`h-8 flex-none rounded-full p-1 pr-2 flex items-center space-x-1 border border-black/15 ${
          selectedBrandId === null
            ? "bg-primary text-white border-primary"
            : "bg-white text-gray-700 border-gray-300"
        }`}
        onClick={() => setSelectedBrandId(null)}
      >
        <p className="text-xs whitespace-nowrap">Tất cả thương hiệu</p>
      </button>
      {categoryBrands.map((brand) => (
        <button
          key={brand.id}
          className={`h-8 flex-none rounded-full p-1 pr-2 flex items-center space-x-1 border border-black/15 ${
            selectedBrandId === brand.id
              ? "bg-primary text-white border-primary"
              : "bg-white text-gray-700 border-gray-300"
          }`}
          onClick={() => setSelectedBrandId(brand.id)}
        >
          <p className="text-xs whitespace-nowrap">{brand.name}</p>
        </button>
      ))}
    </div>
  );
}