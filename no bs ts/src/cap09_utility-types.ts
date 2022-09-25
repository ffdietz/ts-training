// cap09 Utility Types
//// https://youtu.be/tD7DM99nH30

// DOCUMENTATION
// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}

// Partial<Type> : Partial set all properties of the Type as optional
type MyUserOptional = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptional): MyUser => {
  return {
    ...user,
    ...overrides,
  }
};

console.log('merge()', merge(
  {
    name: "Felipe",
    id: 1,
    email: "email@email.com"
  },
  {
    email: "anotheremail@email.com"
  }
))

// Required<Type> : Require set all properties of the Type as required // opposite of Partial
type RequiremyUser = Required<MyUser>;

// Pick<Type, Keys> : Constructs a type by picking the set of properties Keys
type JustEmailandName = Pick<MyUser, "email" | "name">;

// Omit<Type, Keys> : opposite to Pick, removes define keys
type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const {id, ...other} = v
    return {
      ...a,
      [id]: other,
    }
  }, {});
}

console.log(
  mapById([
    {
      id: 1,
      name: "Mr. Foo",
    },
    {
      id: 2,
      name: "Mrs. Bar",
    },
  ])
);