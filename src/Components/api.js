import axios from 'axios';

axios.defaults.baseURL =
  "https://66a02ea6b132e2c136003299.mockapi.io/schedule/";

export const fetchScheduleAll = async () => {
  const response = await axios.get("/schedule");
  return response.data;
};

export const fetchAddSchedule = async (newSchedule) => {
  const response = await axios.post("/schedule", newSchedule);
  return response.data;
};
