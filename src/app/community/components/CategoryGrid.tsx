import SectionTitle from "./SectionTitle";
import CategoryCard from "./CategoryCard";

interface CategoryGridProps {
  title: string;
  subtitle?: string;
  items: { name: string; image: string }[];
}

export default function CategoryGrid({ title, subtitle, items }: CategoryGridProps) {
  return (
    <section>
      <SectionTitle title={title} subtitle={subtitle} />

      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <CategoryCard key={item.name} name={item.name} image={item.image} />
        ))}
      </div>
    </section>
  );
}
