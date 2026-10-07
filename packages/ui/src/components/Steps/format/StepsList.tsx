export function StepsList(steps: string[], className?: string) {
  return (
    <ol className={`${className} list-decimal [&>*]:ml-4`}>
      {steps.map(step => <li key={`step-list-${step}`}><span>{step}</span></li>)}
    </ol>
  );
};
