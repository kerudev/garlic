import { alignments } from "./constants";
import { RecipeInfoProps } from "./types";

function Card({ title, value }: { title: string, value: string }) {
  return (
    <p className="flex flex-col">
      <span className="text-2xl font-bold">{title}</span>
      <span>{value}</span>
    </p>
  );
}

export default function RecipeInfo({ difficulty, time, className, options }: RecipeInfoProps) {
  const alignment = options?.align ?? "left";

  const alignClass = alignments[alignment];

  return (
    <div className={`flex gap-4 ${className} ${alignClass}`}>
      <Card title="Difficulty" value={difficulty} />
      <div className="flex gap-4">
        {Object.entries(time).map(([k, v], i) => <Card key={`card-${k}-${i}`} title={`${k} time`} value={v} />)}
      </div>
    </div>
  );
}
