import { PortfolioPage } from "@/components/portfolio-page";
import { croatianContent } from "@/content/site";

export default function CroatianHome() {
  return <PortfolioPage content={croatianContent} locale="hr" />;
}
