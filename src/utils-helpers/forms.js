//создаем удобное для 1С поле адерса

function createAddress(order) {
  const _order = Object.assign({}, order);
  let address = '';
  if (order.city) address += `г. ${order.city}`;
  if(order.fullnameStreet) {
    address += `, ул. ${order.fullnameStreet}`;
    // if(order.fullnameStreet !== order.street) {
    //   comment += `ул. ${order.street}`;
    // }
  } else if(order.street){
    // comment += `ул. ${order.street}`;
    address += `, ул. ${order.street}`;
  }

  if (order.house) address += `, дом. ${order.house}`;
  if (order.building) address += `, корп. ${order.building}`;
  if (order.entrance) address += `, подъезд ${order.entrance}`;
  if (order.floor) address += `, этаж ${order.floor}`;
  if (order.apartment) address += `, кв. ${order.apartment}`;

  // if (comment) {
  //   comment = `### address comment: ${comment} ###`;
  // }

  _order.address = address;
  _order.comment = order.comment ? order.comment: '';
  return _order;
}

export {
  createAddress
};


