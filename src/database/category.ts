import { conpro } from "./databaseConnection";

export function cateAll() {
    const query: string = `call cateAll();`

    return conpro(query);
}