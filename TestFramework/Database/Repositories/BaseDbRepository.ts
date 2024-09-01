import { PrismaClient } from "@prisma/client";

export abstract class BaseDbRepository {
    protected dbClient: PrismaClient;

    constructor() {
        this.dbClient = new PrismaClient();
    }

    private async disposeDbClient() {
        await this.dbClient.$disconnect();
    }
}

export default BaseDbRepository