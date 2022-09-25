// UTILITY TYPES
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// UTILITIES FACILITATE COMMON TYPE TRANSFORMATIONS

interface Todo {
  id: number;
  author: {
    name: string;
    username: string;
    avatar: string;
  }

  title: string;
  description: string;
  body: string;
  tags: string[];
  is_done: boolean;

  created_at: Date;
}



/* Awaited<Type> *///    to model operations like await in async, or then() 
async function fetchTodoList(): Promise<Todo[]> {
  const data: Todo[] = [];
  return data
}

type FetchDataReturnType = Awaited<Todo | typeof fetchTodoList>;



/* Partial<Type> *///    Constructs a type with all properties of Type set to optional.
const PartialItem: Partial<Todo> | undefined = {};  // defined an object without set initial values, needs to be undefined or empty

PartialItem.title = "title1"
PartialItem.description = "description1"
PartialItem.body = "body1"



/* Required<Type> *///   all properties set to required
const RequiredItem: Required<Todo> = {
  title: "title2",
}



/* Readonly<Type> *///   set all properties to read-only
const ReadonlyItem: Readonly<Partial<Todo>> = {   // utilities accept nesting
  id: 1,
}

ReadonlyItem.id = 2;



/* Record<Keys, Type> *///    map the properties of a type to another type
type Task = "study" | "coding" | "hangout";   //  union type structure
const thisWeek: Record<Task, Partial<Todo>> = {
  study: { is_done: true },
  coding: { is_done: true },
  hangout: { is_done: true },
}



/* Pick<Type, Keys> *///     type by picking the set of properties keys
type User = Pick<Todo['author'], "name" | "avatar" | "username">;   //it's possible to directly access any field

const newUser: User = {
  name: "myName",
  username: "myUserName",
  avatar: "myAvatar.url",
}



/* Omit<Type, Keys> *///    picking all properties from Type and then removing Keys
type Details = Omit<Todo, "id" | "author" | "tags" | "created_at">

const taskDetails: Details = {
  title: '',
  description: '',
  body: '',
  is_done: true,
}



/* Exclude<UnionType, ExcludedMembers> */// type by excluding from UnionType all unions that are assignable to ExcludedMembers
type day = "morning" | "afternoon" | "evening" | "night";

type evening = Exclude<day, "morning" | "afternoon" | "night">;



/* Extract<Type, Union> *///   extracting from Type all union members that are assignable to Union
type winter = Extract<day, "night">



/* NonNullable<Type> *///   type by excluding null and undefined from Type.
type NoNull = NonNullable<boolean | number | string | null>;



/* Parameters<Type> *///    return a tuple type from the types used in the parameters of a function type Type.
function someFunction(
  this: number,
  second: string,
  third: boolean,
): void { };

type itsParams = Parameters<typeof someFunction>


/* ConstructorParameters<Type> */// return a tuple or array type from the types of a constructor function type.
class someClass{  
  constructor(public constructorParam: string){}
  someInstance: boolean;
}

type thoseClassParams = ConstructorParameters<typeof someClass>



/* ReturnType<Type> *///    type from return type of function
type itsReturn = ReturnType<typeof someFunction>



//???/* InstanceType<Type> *///     type consisting of the instance type of a constructor function in Type
type itsInstances = InstanceType<typeof someClass>



/* ThisParameterType<Type> *///   type of the this parameter for a function | 'unknown' if the function has no this
type thisType = ThisParameterType<typeof someFunction>



/* OmitThisParameter<Type> *///   removes the 'this' parameter from Type
type withoutThis = OmitThisParameter<typeof someFunction>;



/* ThisType<Type> *///    serves as a marker for a contextual this type
type anotherType = ThisType<thoseClassParams>;

/* Intrinsic String Manipulation Types*/
/* Uppercase<StringType> *///
/* Lowercase<StringType> *///
/* Capitalize<StringType>*///
/* Uncapitalize<StringType>*///