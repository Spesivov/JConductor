import { StudyRepository } from "../Database/Repositories/StudyRepository";

export class DbFixture {
    studyRepository: StudyRepository;

    constructor() {
        this.studyRepository = new StudyRepository();
    }
}

export default DbFixture