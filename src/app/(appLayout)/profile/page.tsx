import { ROUTES } from "@/_utils/routes";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div>Profile Works</div>
      <Link href={ROUTES.home}>Home</Link>
    </div>
  );
};

export default Profile;
