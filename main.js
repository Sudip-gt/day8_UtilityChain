function chain(arr) {
  return {
    map(fn) {
      return chain(arr.map(fn));
    },
    filter(fn) {
      return chain(arr.filter(fn));
    },
    reduce(fn, initial) {
      return arr.reduce(fn, initial);
    },
    value() {
      return arr;
    }
  };
}

document.getElementById("runChain").addEventListener("click", () => {
  const input = document.getElementById("arrayInput").value;
  const output = document.getElementById("output");

  try {
    const arr = input
      .split(",")
      .map(n => Number(n.trim()))
      .filter(n => !isNaN(n));

    const result = chain(arr)
      .map(n => n * 2)
      .filter(n => n > 5)
      .reduce((sum, n) => sum + n, 0);

    output.textContent = `Result: ${result}`;
  } catch (err) {
    output.textContent = "Invalid input!";
    output.classList.add("text-red-600");
  }
});
