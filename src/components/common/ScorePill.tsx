import { useRef, useState } from 'react';
import { Text } from '@radix-ui/themes';

interface ScoreProps {
  pointsAwarded: number | undefined;
  maxPoints?: number;
}

export default function Score({ pointsAwarded, maxPoints }: ScoreProps) {
  const [score, setScore] = useState(pointsAwarded?.toString());
  const inputRef = useRef<HTMLInputElement>(null);

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value === '') return setScore('');
    let normalizedValue = Math.min(Number(value), maxPoints ?? 100);
    setScore(normalizedValue.toString());
  };

  return (
    <div
      className="bg-blue-100 inline-flex py-1 px-2 justify-center rounded-3xl cursor-pointer"
      onClick={() => inputRef.current?.focus()}>
      <input
        ref={inputRef}
        type="text"
        value={score}
        placeholder="--"
        onChange={handleScoreChange}
        className="w-5 text-end cursor-pointer focus:outline-none focus:ring-0 font-medium"
        maxLength={2}
      />
      {maxPoints ? (
        <Text weight="medium" className="w-6">
          /{maxPoints}
        </Text>
      ) : (
        <p className="w-1"></p>
      )}
      <Text weight="medium">Pkt.</Text>
    </div>
  );
}
