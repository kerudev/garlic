export const StepsCircles = (steps: string[], className?: string) => {
  return (
    <ul className={`${className} list-none`}>
      {steps.map((step, idx) => (
        <li key={`step-circle-${step}`} className="flex items-center gap-4">
          <span className="w-8 h-8 shrink-0 rounded-full bg-black text-white inline-flex items-center justify-center">{idx + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ul>
  );
};
