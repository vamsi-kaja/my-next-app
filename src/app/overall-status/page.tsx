import { getOverallStatus } from "../../models/service-components";

export default async function OverallStatus() {
  const overallStatus = await getOverallStatus();

  return (
    <div>
      <h1>Disruptions</h1>
      <div>
        <p>OverallStatus - {overallStatus.status_page.status}</p>
        <p>
          Service Components Count -{" "}
          {/* {serviceComponents.service_components.length} */}
        </p>
      </div>
    </div>
  );
}
