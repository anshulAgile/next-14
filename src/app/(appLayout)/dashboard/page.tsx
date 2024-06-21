import { userApi } from "@/lib/user";
import BannerSection from "./_components/banner";

const Dashboard = async () => {
  const {
    data: { adminUserList },
  } = await userApi.getUserList(
    { page: 1, limit: 10 },
    {
      cache: "reload",
      next: {
        tags: ["user"],
      },
    }
  );

  return (
    <div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ margin: "20px" }}>
          <h1>SSR rendering</h1>
          {adminUserList ? (
            adminUserList?.map((val) => {
              return (
                <h3 key={val?._id} style={{ margin: "20px 0" }}>
                  {val?.userName}
                </h3>
              );
            })
          ) : (
            <h1>No Record Found</h1>
          )}
        </div>
        <BannerSection />
      </div>
    </div>
  );
};

export default Dashboard;
