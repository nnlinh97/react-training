export const formatVND = (price) => {
    return price.toLocaleString('vi-VN');
}

export const countItem = (cart) => {
    let total = 0;
    cart.forEach((item) => {
        total += item.count;
    });
    return total;
}

export const countPrice = (cart) => {
    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.count;
    });
    return total;
}