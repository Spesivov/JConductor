import { APIRequestContext } from "@playwright/test";

export class StudyClient {
    async getStudies(client: APIRequestContext) {
        return await client.get(`api/v1/studies`)
    }
}