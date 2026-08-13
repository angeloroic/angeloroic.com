import { PortfolioPage } from "@/components/portfolio-page";
import { englishContent } from "@/content/site";

export default function Home() {
  return <PortfolioPage content={englishContent} locale="en" />;
}
