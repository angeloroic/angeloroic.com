import Image, { type StaticImageData } from "next/image";

type ComparisonImage = {
  src: StaticImageData;
  alt: string;
};

export function CaseStudyComparison({
  before,
  after,
  beforeLabel,
  afterLabel,
  sizes,
  featured = false,
}: {
  before: ComparisonImage;
  after: ComparisonImage;
  beforeLabel: string;
  afterLabel: string;
  sizes: string;
  featured?: boolean;
}) {
  return (
    <div className={`case-comparison${featured ? " case-comparison-featured" : ""}`}>
      <figure>
        <figcaption>{beforeLabel}</figcaption>
        <div className="case-screen">
          <Image className="case-comparison-image" src={before.src} alt={before.alt} sizes={sizes} />
        </div>
      </figure>
      <figure>
        <figcaption>{afterLabel}</figcaption>
        <div className="case-screen">
          <Image className="case-comparison-image" src={after.src} alt={after.alt} sizes={sizes} />
        </div>
      </figure>
    </div>
  );
}
