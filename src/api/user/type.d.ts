declare namespace DoType {
  type DoingReq = {
    id: number;
  };
}

interface DefaultResult<T> {
  errMessage: string;
  success: boolean;
  errCode: string;
  data: T;
}
