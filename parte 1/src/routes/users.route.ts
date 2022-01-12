import { Router, Request, Response, NextFunction } from "express";

//get /users
//get /users/:uiid
//post /users
//put /users/:uuid
//delete /users/:uiid

const usersRoute = Router(); 

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Matheus' }];
    res.status(200).send(users);
});

usersRoute.get('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});

export default usersRoute;
