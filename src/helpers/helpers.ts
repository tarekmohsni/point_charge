export const generateIdPointCharge=(): string =>{
    const characters = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
    const charactersLength = characters.length;

    return Array.from({ length: 5 }, () => characters.charAt(Math.floor(Math.random() * charactersLength))).join('');
}