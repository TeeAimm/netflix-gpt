export const usePickAnyFromArray = (arr: any[]) => {
    const random = Math.floor(Math.random() * arr?.length);
    return arr[random];
};
