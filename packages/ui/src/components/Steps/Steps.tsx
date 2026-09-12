type StepsKind = "list" | "circles";

interface StepsProps {
  steps: string[]
  className?: string
  options?: {
    kind?: StepsKind
  }
}

const StepsList = (steps: string[], className?: string) => {
  return (
    <ol className={`${className} list-decimal [&>*]:ml-4`}>
      {steps.map(step => <li key={`step-list-${step}`}><span>{step}</span></li>)}
    </ol>
  );
};

const StepsCircles = (steps: string[], className?: string) => {
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

export default function Steps({ steps, className, options }: StepsProps) {
  switch (options?.kind ?? "list") {
    case "list": return StepsList(steps, className);
    case "circles": return StepsCircles(steps, className);
  }
}
