var names = new Array();
names[0] = "Yaakov";
names[1] = "John";
names[2] = "Jennie";
names[3] = "jason";
names[4] = "peter";
names[5] = "frank";
names[6] = "martin";
names[7] = "william";
names[8] = "laura";
names[9] = "jimmie";

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
