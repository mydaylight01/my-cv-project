import {
    MyCvData,
    PersonalCv,
    ParagraphBgImg,
    Contact,
    Summary,
    SkillSet,
    Achievement,
    WorkExperience,
    LanguageSkill,
    EducationExperience,
} from "src/models/response/contact/contact.response";
import { ContactService } from "src/services/Contact.service";
import { AppDataSource } from "src/data-source";
import {
    PersonalCvRepository,
} from "src/repositories";

export class ContactImplService implements ContactService {
    private readonly personalCvRepository: typeof PersonalCvRepository;

    constructor() {
        this.personalCvRepository = PersonalCvRepository;
    }

    public async getMyCv(): Promise<MyCvData | null> {
        return await AppDataSource.transaction(async (manager) => {
            try {
                console.log("[ContactImplService][getMyCv][Start] get my cv data");

                // const personalCv: PersonalCv = await this.getPersonalCv();

                // const result: MyCvData = {
                //     ownerDisplayName: "",
                //     templateCode: "",
                //     personalCv: personalCv
                // }
                // console.log("[ContactImplService][getMyCv][End] result data", result?.personalCv?.cvName);
                return null;
            } catch (error) {
                console.error("[ContactImplService][getMyCv][Error]", error);
                return null;
            }
        });
    }

    public async downloadCv(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}