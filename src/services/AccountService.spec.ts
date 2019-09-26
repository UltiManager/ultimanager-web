import nock from "nock";
import { API_ROOT } from "../settings";
import AccountService, {
  ErrorResponse,
  SuccessResponse
} from "./AccountService";

const email = "test@example.com";

describe("AccountService", () => {
  describe("requestEmailVerification", () => {
    it("should return the provided email address for a successful request", async () => {
      nock(API_ROOT)
        .post("/accounts/email-verification-requests/", { email })
        .reply(201, { email });

      const response = await AccountService.requestEmailVerification(email);
      expect(response.isError).toBe(false);
      expect((response as SuccessResponse).data).toEqual({ email });
    });

    it("should return the error messages for an invalid request", async () => {
      const errors = {
        email: ["First error", "Second error"],
        // eslint-disable-next-line @typescript-eslint/camelcase
        non_field_errors: ["Generic error"]
      };
      nock(API_ROOT)
        .post("/accounts/email-verification-requests/", { email })
        .reply(400, errors);

      const response = await AccountService.requestEmailVerification(email);

      expect(response.isError).toBe(true);
      expect((response as ErrorResponse).errors).toEqual(errors);
    });

    it("Should return an error response for a failed request", async () => {
      nock(API_ROOT)
        .post("/accounts/email-verification-requests/", { email })
        .replyWithError("Error");

      const response = await AccountService.requestEmailVerification(email);

      expect(response.isError);
      expect((response as ErrorResponse).errors).toBeUndefined();
    });
  });
});
