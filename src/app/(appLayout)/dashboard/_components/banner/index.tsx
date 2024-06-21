"use client";

import { userApi } from "@/lib/user";
import { AdminUserList } from "@/lib/user/types";
import { useEffect, useState } from "react";

const BannerSection = () => {
  const [userList, setUserList] = useState<AdminUserList[]>([]);

  useEffect(() => {
    userApi
      .getUserList({ page: 1, limit: 10 })
      .then((res) => {
        setUserList(res?.data?.adminUserList);
      })
      .catch(() => {
        setUserList([]);
      });
  }, []);

  return (
    <div>
      <h1>Client side rendering</h1>
      <div style={{ marginTop: "40px" }}>
        {userList ? (
          userList?.map((val) => {
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
    </div>
  );
};

export default BannerSection;
