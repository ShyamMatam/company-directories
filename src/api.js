import { mockCompanies } from "./mockCompanies";

export const fetchCompanies = async () => {
  // Simulate async API call
  return { data: mockCompanies };
};
