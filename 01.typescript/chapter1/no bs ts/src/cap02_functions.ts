// cap02 FUNCTIONS
//// https://youtu.be/-TsIUuA3yyE

//defines the parameters types and the return types
function addNumbers(a: number, b: number): number {
  return a + b
}

export default addNumbers;

//default params
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;
  
//returns a string
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

//returns void
export const printFormat = (title: string, param: string | number): void => {
  console.log('format(title, param) >>', format(title, param));
};

// return Promise
export const fetchData = (url: string): Promise<string> =>
//in case of Promise type error, change tsconfig.json to '"target": "esnext"'
  Promise.resolve(`Data from ${url}`);

// rest parameters
function introduce(salutation: string, ...names: string[]): string {
  //add any argument after salutation as an array
  return `${salutation} ${names.join(" ")}`
}

//typescript only runs at compile not on run time
export function getName(user: { first: string, last: string }): string {
  // return `${user.first} ${user.last}`
  //is possible add conditionals in case no parameter or errors
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`
}

