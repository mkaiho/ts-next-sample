import { Endpoint } from "@/mocks/api/responses/endpoint";
import { endpoints as users } from "@/mocks/api/responses/user";

export type Route = Array<Endpoint>;

export const route: Route = [...users];
