import Person, { introduce, isAdult } from "./person.js";

const user1 = new Person("jj", "javadi", 25);
const user2 = new Person("mj", "Moradi", 16);

introduce(user1);
isAdult(user1);

introduce(user2);
isAdult(user2);
