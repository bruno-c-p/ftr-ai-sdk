import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main className="max-w-3xl w-full mx-auto flex flex-col justify-between gap-6 py-6 relative h-dvh">
      <Chat />
    </main>
  );
}
