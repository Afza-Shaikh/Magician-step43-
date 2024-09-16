let magicians: string[] = ["Alice","David","Chris"];
function make_great(magicians: string[]): string[] {
let greatmagicians = [];
magicians.forEach(magicians => {
    greatMagicians.push(`${magicians}The great`);
});
return (greatMagicians);
}
let greatMagicians = make_great(magicians.slice());
console.log("Original magicians:");
make_great(magicians);
console.log("Great magicians");
make_great(greatMagicians);
