interface StepsProps {
  steps: string[]
  className?: string
}

export default function Steps({ steps, className }: StepsProps) {
  return (
    <ol className={`${className} list-decimal [&>*]:ml-8`}>
      {steps.map(step => <li key={step}>{step}</li>)}
    </ol>
  );
}
