import { UserServices } from "../services/user.service"
import { newUserDto } from "../types"



const userServices : UserServices =  new UserServices()

export const userControllers = {

  addUser:  (req: any, res: any) => {
    try {
      const newUser: newUserDto = req.body;
      userServices.addUser(newUser).then((result) => {
        res.json(result);
      });
    } catch (error) {
      console.error(error);
      res.sendEstatus(500);
    }
  },

    userLogin: (req:any, res:any) => {
      try {
        const userData = req.body
        userServices.Userlogin(userData).then( result =>{

          if(!!result){
            res.json(result)
          }else{
            res.sendStatus(404)
            console.log('usuario logueado')
          }
      
        })
      } catch (error) {
        console.error(error);
      res.sendStatus(500);
      }
    }

};
 

