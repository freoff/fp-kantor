const authorization = 'authorization';
const register = 'register';
const login = 'login';

const applicationRoutes = {
  authorization,
  register,
  login,
  authorizationRegister: [authorization, register],
  authorizationLogin: [authorization, login]
};
export default applicationRoutes;
