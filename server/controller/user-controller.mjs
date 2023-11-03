import User  from '../schema/user-scheme.mjs'


export const addUser = async (request,response,next) => {
    const user = request.body;
    

    const newUser = new User(user);
     
    try {
       await newUser.save();
       response.status(201).json(newUser);
    }catch(err) {
        response.status(409).json({message: err.message});
    }   

    
    
}