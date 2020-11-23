function orderMenu(food) {
  var item;
  switch (food) {

    case "1":
    item = "hamburger and fries";
    break;

    case "2":
    item = "cheeseburger and onion rings";
    break;

    case "3":
    item = "pizza and ice cream";
    break;

    case "4":
    item = "steak and potatoes";
    break;

    default:
      item = "Please enter your order number";
  }
  return item;
}
