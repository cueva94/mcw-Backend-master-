import { UserPojo } from "../data/models/user.model"
import { UserRepository } from "../data/repositories/user.repository"
import { newUserDto, userDto } from "../types"
import { v4 as uuid } from 'uuid';
import Logger from "../utils/utils";

export class UserServices{

    _userRepository : UserRepository


    constructor(){
        this._userRepository = new UserRepository()
    }

 async addUser (user : newUserDto) : Promise <string>{
    
    let userPojo : UserPojo = user as UserPojo
 
    userPojo.user_id = uuid() 

    const userPromise = await this._userRepository.addUser(userPojo)
    .then(user_id => {
        return user_id
    }).catch(error => {
           Logger.error(error, "Error en el servicio addUser")
        throw error
    })
    return userPromise
} 

async Userlogin (userData: {email: string, password: string}) : Promise <userDto | undefined>{

    const userPromise = await this._userRepository.userLogin(userData)
    .then( resUser => {

        if(!!resUser){
            return this.parsePojoIntoDto(resUser)
        }
        return undefined
    }).catch(error => {
        Logger.error(error, "Error en el servicio UserLogin")
        return error
    })
    return userPromise
}




parsePojoIntoDto(userPojo: UserPojo): userDto{
    const userDTO : userDto = {
        fullname: userPojo.fullname,
        phone: userPojo.phone,
        email: userPojo.email,
        password: userPojo.password,
        dob: userPojo.dob,
        deposit: userPojo.deposit
    }
    return userDTO
}
}