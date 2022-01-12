import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

//get /users
//get /users/:uiid
//post /users
//put /users/:uuid
//delete /users/:uiid

const usersRoute = Router(); 

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Matheus' }];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    console.log(req.body);

    res.status(StatusCodes.CREATED).send(newUser);
})

export default usersRoute;
