import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">¡Bienvenido!</span>
      <Link
        href="/exam"
        type="primary"
        className="text-4xl"
        style={{ marginTop: 50 }}
      >
        Ir al examen
      </Link>
    </div>
  );
}
