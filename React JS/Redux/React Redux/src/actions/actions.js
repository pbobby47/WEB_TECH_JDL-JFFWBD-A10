function updatename(name) {
  // logic
  return { type: "UPDATE_NAME", payload: name };
}

function updatemobile(mobile) {
  return { type: "UPDATE_MOBILE", payload: mobile };
}

function deposit(amount) {
  return { type: "DEPOSIT", payload: amount };
}

function withdraw(amount) {
  return { type: "WITHDRAW", payload: amount };
}

function ADD_TRANSACTION(obj) {
  return { type: "ADD_TRANSACTION", payload: obj };
}

export { updatename, updatemobile, deposit, withdraw, ADD_TRANSACTION };
