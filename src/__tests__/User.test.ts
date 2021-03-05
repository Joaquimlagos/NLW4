import req from 'supertest';
import { app } from "../app";

import createConnection from '../database'

describe("Users", () =>{
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new user", async () => {
        const res = await req(app).post("/users").send({
            email: "user@exemplo.com",
            name: "User Example"
        });

        expect(res.status).toBe(201);
    });
});
