import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { z } from "zod";

const object = z.object({
  email: z.string().email(),
  password: z.string()
})

export default async function validUser({ body }: Request, res: Response, next: NextFunction) {
  try {
    const result = object.parse({
      email: body.email,
      password: body.password,
    });
    body = result;
    next();
  } catch (error) {
    next(createHttpError(500, res.json({ status: 500 })));
  }
}
