export default interface ICredentials {
  access_token?: string;
  token_type?: string;
  scope?: string;
  user_id?: number;
  error?: string;
  error_description?: string;
}
