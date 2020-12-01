const sentence = "|/-\\|/-\\|/-\\";

let timer = 100;
for (let char of sentence) {
  setTimeout( () => {
     process.stdout.write(char), process.stdout.write("\r") }, timer);
     timer += 200;
};