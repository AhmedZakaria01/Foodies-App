import Link from "next/link";

function ShareMeals() {
  return (
    <main>
      <p> Here is The Shared Meals </p>
      <Link href={"/meals"}>Meals</Link>
    </main>
  );
}

export default ShareMeals;
