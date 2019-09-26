import axios from "axios";
import { API_ROOT } from "../settings";

export interface ErrorResponse {
  errors?: Record<string, string[]>;
  isError: true;
}

export interface SuccessResponse<DataType = unknown> {
  data: DataType;
  isError: false;
}

type APIResponse<DataType = unknown> =
  | ErrorResponse
  | SuccessResponse<DataType>;

class AccountService {
  /**
   * Submit a new request for a verification email.
   * @param email The email to request a verification for.
   */
  public static async requestEmailVerification(
    email: string
  ): Promise<APIResponse<{ email: string }>> {
    try {
      const response = await axios.post(
        `${API_ROOT}/accounts/email-verification-requests/`,
        { email }
      );

      return {
        data: response.data,
        isError: false
      };
    } catch (error) {
      return {
        errors: error.response ? error.response.data : undefined,
        isError: true
      };
    }
  }
}

export default AccountService;
