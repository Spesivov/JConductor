import { StudyClient } from "../RestClients/StudyClient";

export class ApiFixture {
    studyApi: StudyClient

    constructor() {
        this.studyApi = new StudyClient();
    }
}