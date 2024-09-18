import { fakerEN as faker } from "@faker-js/faker";

import { METHOD, Endpoint } from "@/mocks/api/responses/endpoint";

const users = Array.from({ length: 10 }).map((_, i) => ({
  id: `user_${i}`,
  name: faker.person.fullName(),
}));

export const endpoints: Array<Endpoint> = [
  {
    path: "/users",
    response: {
      [METHOD.GET]: {
        statusCode: 200,
        data: users,
      },
    },
  },
  ...users.map((u) => {
    return {
      path: `/users/${u.id}`,
      response: {
        [METHOD.GET]: {
          statusCode: 200,
          data: u,
        },
      },
    };
  }),
];
