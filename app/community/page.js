import Link from "next/link";

function CommunityPage() {
  return (
    <main>
      <p> Here is The Community Page </p>
      <Link href={"/meals"}>Meals</Link>
    </main>
  );
}

export default CommunityPage;
