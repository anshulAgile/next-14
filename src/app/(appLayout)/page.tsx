import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo - Home",
  description: "Description",
};

async function getData() {
  const res = await fetch("https://your-backend-api.com/endpoint", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Dashboard = () => {
  return <div>Home page of Next js Demo 14 </div>;
};

export default Dashboard;
