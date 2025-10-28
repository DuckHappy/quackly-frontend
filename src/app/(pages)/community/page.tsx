import CommunityHeader from "./components/CommunityHeader";
import CategoryGrid from "./components/CategoryGrid";
import PopularCommunities from "./components/PopularCommunities";
import RecommendedCommunities from "./components/RecommendedCommunities";
import { mainCategories, popularCommunities, recommendedCommunities } from "./data/communities";

export default function CommunityPage() {
  return (
    <div className="min-h-screen w-full bg--skyblue p-6 pl-[100px] space-y-8">
      <CommunityHeader />

      <CategoryGrid title="Explora comunidades" subtitle="Únete a lagunas llenas de quacks" items={mainCategories} />

      <PopularCommunities title="Comunidades populares" items={popularCommunities} />

      <RecommendedCommunities title="Basadas en tus Quacks" items={recommendedCommunities} />
    </div>
  );
}
