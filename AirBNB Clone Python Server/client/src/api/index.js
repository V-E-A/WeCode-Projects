
const baseURL = 'https://abnb-server-python-ob491ni7q.now.sh/houses/'


async function getAllData() {
  const response = await fetch(baseURL);
  return response.json();
}

async function getOneData(id) {
  const response = await fetch(baseURL + id);
  return response.json();
}

function postBooking(id, bookingsNewArray) {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify({ bookings: bookingsNewArray }),
    headers: { "Content-Type": "application/json" }
  });
}
const api = { getAllData, getOneData, postBooking };
export default api;
