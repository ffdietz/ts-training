function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log('printIngredient() >> ', `${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}
  
// printIngredient("1C", "Flour");
// printIngredient("1C", "Flour", "something extra");

interface User {
  id: string;
  info?: {
    email?: string;
  }
}

function getEmail(user: User) {
  if (user.info) {
    // add '!' to be aware the function will not return "" / (null)
    return user.info.email!;
  }
  return ""  
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? ""
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log('[x, y]', [x, y]);
  callback?.();
}