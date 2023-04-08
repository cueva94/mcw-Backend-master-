import { UserPojo } from "../models/user.model"
import {user_connect} from "../config/user.db.config"


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
      console.error(error);
      throw error;
    }
  }

  async userLogin(userData: {
    email: string;
    password: string;
  }): Promise<UserPojo | undefined> {
    try {
      console.log("en el repositorio");
      console.log(userData);
      const user = await this._userRepository.findOne({
        where: { email: userData.email, password: userData.password },
      });

      if (!!user) {
        return user;
      } else {
        return undefined;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}