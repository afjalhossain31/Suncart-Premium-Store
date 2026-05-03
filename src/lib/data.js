export const getProducts = async () => {
  const res = await fetch("https://suncart-store.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
