import { CryptoUserPojo } from "../models/cryptoUser.model";
import { cryptUser_connect } from "../config/cryptoUser.db.config";
import Logger from "../../utils/utils";
export class CryptoUserRepository {
  _db: any = {};
  _cryptoUserRepository: any;

  constructor() {
    this._db = cryptUser_connect();
    this._cryptoUserRepository =
      this._db.sequelize.getRepository(CryptoUserPojo);
  }

  async cryptoUsers(user_id: string): Promise<CryptoUserPojo[]> {
    try {
      const newCryptoUser = await this._cryptoUserRepository.findAll({
        user_id: user_id,
      });
      if (!!newCryptoUser) {
        return newCryptoUser;
      } else {
        return [];
      }
    } catch (error) {
      Logger.error(error, "Error en el repositorio cryptoUsers");
      throw error;
    }
  }


async cryptoBuy( newCryptoBuy : CryptoUserPojo): Promise<string>{

  try {
    const CryptoBuy = await this._cryptoUserRepository.create( newCryptoBuy)
    return CryptoBuy.crypto_id
    
  } catch (error) {
    Logger.error(error,"Error en el repositorio CryptoBuy")
    throw error
  }
}


}