//cap14 MAPPED TYPES
//// https://youtu.be/0-BsmzlMMIw

import { Tracing } from "trace_events";

// type with flexible fields
type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: "Ellon",
  breed: "Jeffy",
  age: 16
}

interface DogInfo {
  name: string;
  age: number;
}

//Mapped types is a generic type which uses a union of PropertyKey s to create a type
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

// is possible define templates literals
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} &
  {
    [Property in keyof Type as `on${Capitalize<
      string & Property
    >}Delete`]?: () => void;
  };

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Need to be implemented"
}

const lg: DogInfo = {
  name: "LG",
  age: 13
} 

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => { },
  onAgeDelete: () => {},
})