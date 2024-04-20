export default function View({ date }: { date: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>The date is {date}</p>
    </div>
  );
}
