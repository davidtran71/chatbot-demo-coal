

function showStackUp() {
  // Hide the input fields and button
  document.getElementById("input1").style.display = "none";
  document.getElementById("input2").style.display = "none";
  document.querySelector("button").style.display = "none";

  // Show the stack up information
  document.getElementById("stackUpInfo").classList.remove("hidden");
}
