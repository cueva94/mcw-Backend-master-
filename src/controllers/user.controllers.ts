
import { UserServices } from "../services/user.service"
import { newUserDto } from "../types"
import Logger from "../utils/utils";



const userServices : UserServices =  new UserServices()

export const userControllers = {

  addUser:  (req: any, res: any) => {
    try {
      const newUser: newUserDto = req.body;
      userServices.addUser(newUser).then((result) => {
        res.json(result);
        Logger.info("usuario creado")
      });
    } catch (error) {
      Logger.error("Usuario no creado");
      res.sendEstatus(500);
    }
  },

    userLogin: (req:any, res:any) => {
      try {
        const userData = req.body
        userServices.Userlogin(userData).then( result =>{
          if(!!result){
            res.json(result)
            Logger.info('usuario logueado')
          }else{
            res.sendStatus(404)
            Logger.warn("Usuario no encontrado")
          }
      
        })
      } catch (error) {
        Logger.error("Error User Login");
      res.sendStatus(500);
      }
    }

};
 

