interface SectionDividerProps {
  sectionName: string;
  sectionSlug: string;
}
const SectionDivider = ({ sectionName, sectionSlug }: SectionDividerProps) => {
  return (
    <div className="container py-3">
      <div className="text-center">
        <h1 className="animate-text fw-bold">{sectionName}</h1>
        <p className="lead">{sectionSlug}</p>
      </div>
    </div>
  );
};

export default SectionDivider;
