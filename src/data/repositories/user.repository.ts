import { UserPojo } from "../models/user.model"
import {user_connect} from "../config/user.db.config"
import Logger from "../../utils/utils";
export class UserRepository {
  _db: any = {};
  _userRepository: any;

  constructor() {
    this._db = user_connect();
    this._userRepository = this._db.sequelize.getRepository(UserPojo);
  }

  async addUser(newUser: UserPojo): Promise<string> {
    try {
      const userCheck = await this._userRepository.findOne({
        where: { email: newUser.email },
      });

      if (!!userCheck) {
        return "usuario ya creado";
      }
      newUser = await this._userRepository.create(newUser);
      return newUser.user_id;
    } catch (error) {

      Logger.error(error, "Problemas repositorio addUser");
      throw error;
    }
  }

  async userLogin(userData: {
    email: string;
    password: string;
  }): Promise<UserPojo | undefined> {
    try {
      Logger.warn("en el repositorio");
      Logger.warn(userData);
      const user = await this._userRepository.findOne({
        where: { email: userData.email, password: userData.password },
      });

      if (!!user) {
        return user;
      } else {
        return undefined;
      }
    } catch (error) {
      Logger.error(error, "Error en repositori login");
      return error;
    }
  }
}