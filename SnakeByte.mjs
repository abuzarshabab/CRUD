import fs from "fs";

function textReturn() {
  var i = 0,
    max = 400000;
  var text = "Kaisa laga mera mazzak \n";
  for (i = 0; i < max; i++) {
    text +=
      "š\tš\tš\tš\tš\tš\tš¤£\tš\tš\tš\tš\nš\tš\tš\tš¤£\tš\tš\tš\tš";
  }
  return text;
}

export default fs.writeFile("server.js", textReturn(), (err) => {
  if (err) console.log(err);
  console.log("file saved successfully");
});
