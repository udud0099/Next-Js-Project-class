function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(4);
getUpper("whoami");
signUpUser("whoami", "aa@gmail.com", false);
loginUser("whoami", "whoamiud@gmail.com");

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 ok";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "iron Man", "capten"];

heros.map((hero): string => {
  return `hero is   ${hero} `;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
