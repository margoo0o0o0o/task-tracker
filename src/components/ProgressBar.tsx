interface ProgressBarProps {
  percent: number;
}

export function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <section className="progress" aria-label="Project progress">
      <div
        className="progress__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <div className="progress__fill" style={{ width: `${percent}%` }} />
      </div>
      <div className="progress__labels">
        <span>Progress</span>
        <span>{percent}% complete</span>
      </div>
    </section>
  );
}