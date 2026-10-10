import { StepsFormatProps } from "./types";

export function StepsList({ steps, className }: StepsFormatProps) {
  return (
    <ol className={`${className} list-decimal [&>*]:ml-4`}>
      {steps.map(step => <li key={`step-list-${step}`}><span>{step}</span></li>)}
    </ol>
  );
};
