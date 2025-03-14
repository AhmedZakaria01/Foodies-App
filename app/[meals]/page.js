import Link from "next/link";

function Meals() {
  return (
    <main>
      <p> Here is The Meals </p>
      <Link href={"/meals/share"}> Shared</Link>
      <Link href={"/community"}>Community</Link>
      <Link href={"/meals/meal-1"}>meal 1</Link>
      <Link href={"/meals/meal-2"}>meal 2</Link>
    </main>
  );
}

export default Meals;
