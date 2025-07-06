import api from "./api";

export const getTicketStats = async () => {
  const response = await api.get("/Chart/ticket-status");
  return response.data;
};
export const getSaleStats = async () => {
  const response = await api.get("/Chart/sales-category");
  return response.data;
};
