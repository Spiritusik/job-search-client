type JobDetailRowProps = {
  label: string;
  value: string | number;
};

export function JobDetailRow({ label, value }: JobDetailRowProps) {
  return (
    <div className="text-sm text-gray-700 dark:text-gray-300">
      <span className="font-bold">{label}:</span> {value}
    </div>
  );
}
