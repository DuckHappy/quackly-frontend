interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={`mb-4 ${className || ""}`}>
      <h2 className="text-xl font-bold text-sky-900">{title}</h2>
      {subtitle && <p className="text-sky-600">{subtitle}</p>}
    </div>
  );
}
