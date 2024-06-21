import { apiInstance } from "@/_utils/interceptor";
import { IUserListReq, IUserListRes } from "./types";
import { IApiSuccess } from "@/_utils/type";

export const userApi = {
  getUserList: (args: IUserListReq, options: RequestInit = {}) => {
    return apiInstance<IApiSuccess<IUserListRes>>("/admin/user/list", {
      method: "post",
      body: JSON.stringify(args),
      ...options,
    });
  },
};
