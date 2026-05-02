
import './ElectionTimeline.css';

const TIMELINE_STEPS = [
  {
    title: "Voter Registration",
    date: "Before Announcement",
    description: "Ensure your name is on the Electoral Roll. Register or verify details via the Voter Helpline App or NVSP portal.",
    icon: "📝"
  },
  {
    title: "Model Code of Conduct",
    date: "Upon Announcement",
    description: "The Election Commission of India (ECI) announces dates, bringing the Model Code of Conduct into immediate effect.",
    icon: "📜"
  },
  {
    title: "Polling Phase",
    date: "Scheduled Dates",
    description: "Elections may occur in multiple phases. Find your constituency's specific polling date and your designated polling booth.",
    icon: "🗳️"
  },
  {
    title: "Counting Day",
    date: "Post-Polling",
    description: "EVM votes across all phases and constituencies are counted on a single designated day, followed by the results declaration.",
    icon: "📊"
  }
];

export default function ElectionTimeline() {
  return (
    <div className="timeline-container">
      <h2 className="section-title">Election Process & Timeline</h2>
      <div className="timeline">
        {TIMELINE_STEPS.map((step, index) => (
          <div className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }} key={index}>
            <div className="timeline-icon">{step.icon}</div>
            <div className="timeline-content glass-panel">
              <span className="timeline-date">{step.date}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
