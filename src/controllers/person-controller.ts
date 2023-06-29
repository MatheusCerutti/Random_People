import { Request, Response } from "express";

export async function getPerson(req: Request, res: Response) {
    
    try {

        const person = await personService.getPerson;

        return res.status(httpStatus.CREATED).json({
            id: person.id,
            firstName: person.firstName,
            lastName: person.lastName
          });
        
    } catch (error) {
        
        if (error.name === 'DuplicatedEmailError') {
            return res.status(httpStatus.CONFLICT).send(error);
          }
          return res.status(httpStatus.BAD_REQUEST).send(error);
        }
    
}