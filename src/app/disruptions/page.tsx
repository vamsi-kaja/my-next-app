import { getDisruptions } from "../../models/service-components";
import { fetchCommonData } from "../../data/app-data";

export default async function Disruptions() {
  const disruptions = await getDisruptions();
  const { serviceComponents } = await fetchCommonData();

  return (
    <div>
      <h1 className="text-4xl">Disruptions</h1>
      <div>
        <p>Disruptions Count - {disruptions?.meta?.total_count}</p>
        <p>
          Service Components Count -{" "}
          {serviceComponents.service_components.length}
        </p>
      </div>
    </div>
  );
}
