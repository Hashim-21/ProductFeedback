import { createConnection } from "mysql2/promise";


const connection = async () => {
    await createConnection(process.env.DATABASE_URL ?? '');
}