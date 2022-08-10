function radianToDegree(radianInput) {
  const degree = (radianInput * 180) / Math.PI;
  if (typeof radianInput !== "number") {
    return "Please provide a number";
  }

  let fixedDegree = degree.toFixed(2);
  let answer = parseFloat(fixedDegree);
  return answer;
}

function isJavaScriptFile(filename) {
  if (typeof filename !== "string") {
    return "Please provide a javascript file name";
  }

  let js = filename.substr(filename.lastIndexOf(".") + 1);
  if (js === "js") {
    return true;
  }
  return false;
}

function oilPrice(disel, petrol, octane) {
  if (
    typeof disel !== "number" ||
    typeof octane !== "number" ||
    typeof petrol !== "number"
  ) {
    return "Please provide a number";
  }

  const diselPrice = disel * 114;
  const petrolPrice = petrol * 130;
  const octanePrice = octane * 135;

  const totalPrice = diselPrice + octanePrice + petrolPrice;
  return totalPrice;
}

function publicBusFare(totalPassenger) {
  const busCapasity = 50;
  const microCapasity = 11;
  let total;
  if (typeof totalPassenger !== "number") {
    return "Please provide total passenger as number";
  }
  if (totalPassenger <= 50) {
    return 0;
  } else {
    let remain = totalPassenger % busCapasity;
    total = remain % microCapasity;
    const busFare = total * 250;
    return busFare;
  }
}

function isBestFriend(object1, object2) {
  if (typeof object1 !== "object" || typeof object2 !== "object") {
    return "Please provide object ";
  }

  if (object1.name === object2.friend && object1.friend === object2.name) {
    return true;
  }
  return false;
}
