export default function Tags({ items }) {
  return <div className="tags">{items.map((t) => <span key={t}>{t}</span>)}</div>
}
