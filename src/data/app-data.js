import { getStatusPage } from "../models/status-page";
import { getServiceComponents } from "../models/service-components";
import { cache } from "react";

export const fetchCommonData = cache(async function () {
  const [statusPage, serviceComponents] = await Promise.all([
    getStatusPage(),
    getServiceComponents(),
  ]);

  return {
    statusPage,
    serviceComponents
  }
});