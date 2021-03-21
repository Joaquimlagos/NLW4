import req from 'supertest';
import { app } from "../app";

import createConnection from '../database'

describe("Surveys", () =>{
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async () => {
        const res = await req(app).post("/surveys").send({
            title: "Title exemple",
            description: "description exemple",
        });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id");
    });
    it("Shout be able to get all surveys", async () => {
            await req(app).post("/surveys").send({
            title: "Title exemple",
            description: "description exemple2",
        });

        const res = await req(app).get("/surveys");

        expect(res.body.length).toBe(2);
    })
});