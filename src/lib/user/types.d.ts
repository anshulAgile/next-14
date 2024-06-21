export interface IUserListReq {
  page: number;
  limit: number;
  search?: string;
  column?: string;
  order?: string;
}

export interface IUserListRes {
  adminUserList: AdminUserList[];
  total_records: number;
}

export interface AdminUserList {
  _id: string;
  depot: string;
  userName: string;
  mobileNo: string;
  point: number;
  createdDate: string;
  updatedDate: string;
  __v: number;
  convertedForSort: string;
}
