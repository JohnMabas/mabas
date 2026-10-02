/**
 * Consistent section heading.
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {"h2"|"h3"} [props.as]
 */
export default function SectionHeading({ title, description, as: Tag = "h2" }) {
  return (
    <div className="mb-8">
      <Tag className="text-xl font-semibold text-zinc-900">{title}</Tag>
      {description && (
        <p className="mt-2 text-zinc-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
