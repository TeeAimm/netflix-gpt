export const pickAnyFromArray = (arr: any[]) => {
    const random = Math.floor(Math.random() * arr?.length);
    return arr[random];
};
