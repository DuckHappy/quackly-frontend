import SectionTitle from "./SectionTitle";
import CategoryCard from "./CategoryCard";

interface Props {
  title: string;
  items: { name: string; image: string }[];
}

export default function PopularCommunities({ title, items }: Props) {
  return (
    <section>
      <SectionTitle title={title} />
      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.map((item) => (
          <CategoryCard key={item.name} name={item.name} image={item.image} />
        ))}
      </div>
    </section>
  );
}
