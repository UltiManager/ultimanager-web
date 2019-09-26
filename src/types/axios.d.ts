declare module "axios/lib/adapters/http" {
  import { AxiosAdapter } from "axios";

  const httpAdapter: AxiosAdapter;

  export default httpAdapter;
}
