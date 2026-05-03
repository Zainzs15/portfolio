type WaveVariant = 'to-muted' | 'to-base';

export function SectionWave({ variant }: { variant: WaveVariant }) {
  const color = variant === 'to-muted' ? 'var(--bg-elevated)' : 'var(--bg-base)';
  return (
    <div className="section-wave" style={{ color }} aria-hidden>
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0 24C360 0 720 48 1080 24s360-24 360-24v24H0V24Z"
        />
      </svg>
    </div>
  );
}
