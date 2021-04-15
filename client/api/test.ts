export const testGet = async (): Promise<string> => {
    const response = await fetch('http://localhost:4000/');
    const data = await response.text();
    return data;
};
