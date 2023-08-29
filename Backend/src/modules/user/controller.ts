import {FastifyRequest} from "fastify";
import {CreateUserDto, LoginDto, UpdateUserDto} from "./schema";
import {createUser, getUserById, getUsers, login, updateUser} from "./service";

export const getUsersHandler = async () => {
  return await getUsers();
};

export const getUserByIdHandler = async (
  req: FastifyRequest<{
    Params: {
      uid: string;
    };
  }>
) => {
  return await getUserById(req.params.uid);
};

export const createUserHandler = async (
  req: FastifyRequest<{
    Body: CreateUserDto;
  }>
) => {
  return await createUser(req.body);
};

export const updateUserHandler = async (
  req: FastifyRequest<{
    Body: UpdateUserDto;
  }>
) => {
  return await updateUser(req.body);
};

export const loginHandler = async (
  req: FastifyRequest<{
    Body: LoginDto;
  }>
) => {
  return await login(req.body);
};
