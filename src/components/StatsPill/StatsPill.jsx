import "./StatsPill.css";

export default function StatsPill({ label, stat }) {
  return (
    <div data-component="stats-pill">
      <span className="pill-label primary-font-body-text">{label}</span>
      <span className="pill-stat primary-font-body-text">{stat}</span>
    </div>
  );
}
