import {BaseDbRepository} from './BaseDbRepository'
import {STUDY_List as StudyList} from '@prisma/client'

export class StudyRepository extends BaseDbRepository{
    
    async getStudyList(sitePkey: number): Promise<StudyList []> {
        const studyList: StudyList [] = await this.dbClient.$queryRaw<StudyList []>`USE cce_develop_qa; SELECT* from STUDY_List WHERE Site_pKey = ${sitePkey}`;
        return studyList;
    }
}

export default StudyRepository;