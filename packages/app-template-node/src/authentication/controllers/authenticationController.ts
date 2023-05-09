const authenticationService = require("../services/authenticationService");

class AuthenticationController {
  async find(req: any, res: any) {
    await authenticationService.find(req, res);
  }
}

module.exports = new AuthenticationController();
