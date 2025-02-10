import Link from "next/link";
import { fetchCommonData } from "../data/app-data";

export default async function Index() {
  const { serviceComponents } = await fetchCommonData();
  return (
    <div>
      <h1 className="text-4xl">Index</h1>
      <div className="flex gap-4">
        <Link href="/disruptions" prefetch={false} className="text-blue-500">
          Disruptions
        </Link>
        <Link href="/overall-status" prefetch={false} className="text-blue-500">
          Overall Status
        </Link>
      </div>
      <p>
        Service Components Count - {serviceComponents.service_components.length}
      </p>
    </div>
  );
}
