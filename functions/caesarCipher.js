function caesarCipher(string) {
  return Array.from(string)
    .map((char) => {
      const isLetter = char.match(/[A-Za-z]/);
      if (!isLetter) return char;
      if (char === "z") return "a";
      if (char === "Z") return "A";
      return String.fromCharCode(char.charCodeAt(0) + 1);
    })
    .join("");
}
module.exports = caesarCipher;
