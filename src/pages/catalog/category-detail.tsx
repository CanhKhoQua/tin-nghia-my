import HorizontalDivider from "@/components/horizontal-divider";
import ProductGrid from "@/components/product-grid";
import { useAtomValue } from "jotai";
import { productsByBrandState, productsByCategoryState } from "@/state";
import CategorySlider from "@/components/category-slider";
import { Suspense } from "react";
import { ProductGridSkeleton } from "../search";
import { EmptyCategory } from "@/components/empty";
import { useParams } from "react-router-dom";
import BrandSlider from "@/components/brand-slider";

function ProductList() {
  const { categoryId, brandId } = useParams();
  console.log(categoryId)

  const products = useAtomValue(
    brandId
      ? productsByBrandState(String(brandId))
      : productsByCategoryState(String(categoryId))
  );
  if (!products.length) {
    return <EmptyCategory />;
  }

  return <ProductGrid products={products} className="pt-4" />;
}

export default function CategoryDetailPage() {
  return (
    <div className="h-full flex flex-col bg-section">
      <CategorySlider />
      <BrandSlider />
      <HorizontalDivider />
      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<ProductGridSkeleton className="pt-4" />}>
          <ProductList />
        </Suspense>
      </div>
    </div>
  );
}
