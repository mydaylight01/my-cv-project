export interface MyCvData {
    ownerDisplayName: string,
    templateCode: string,
    personalCv: PersonalCv
}

export interface PersonalCv {
    id: number,
    uuid: string,
    cvName: string,
    publishStatus: boolean,
    imageUrl: string,
    imageUrlFlip: string,
    downloadLink: string,
    languageCode: string,
    titleName: string,
    firstName: string,
    lastName: string,
    jobPosition: string,
    paragraphBgImg: Array<ParagraphBgImg>,
    contact: Array<Contact>,
    summary: Array<Summary>,
    skillSet: Array<SkillSet>,
    workExperiences: Array<WorkExperience>,
    achievements: Array<Achievement>,
    educationExperiences: Array<EducationExperience>,
    languageSkill: Array<LanguageSkill>,
    // certificates: Array<Certificate>,
}

export interface ParagraphBgImg {
    paragraphName: string,
    imageUrl: string,
    bgColor: string,
    blurLevel: string,
}

export interface Contact {
    contactTypeName: string,
    link: string, // Link if contact type has link
    contactInfo: string, // Contact information if no link
    side: string, // Display side on the content
    sequence: number,
    icon: string,
}

export interface Summary {
    paragraph: number,
    content: string,
    isBlank: boolean, // For Skip Summary Paragraph
}

export interface SkillSet {
    paragraphSide: string,
    sequence: number,
    skillSetName: string,
    skills: Array<Skills>,
}

export interface Skills {
    skillContent: string,
    sequence: number,
    skillLevel: number | null,
    skillIcon: string,
    isHighlight: boolean,
}

export interface WorkExperience {
    jobPositionName: string,
    jobDescription: string,
    workplaceName: string,
    sequence: number,
    workStartDate: Date | null,
    workEndDate: Date | null,
    isPresent: boolean,
    projects: Array<Projects>,
}

export interface Projects {
    sequence: number,
    projectName: string,
    projectStartDate: Date | null,
    projectEndDate: Date | null,
    projectDescription: Array<ProjectDescription>,
}

export interface ProjectDescription {
    paragraphSequence: number,
    description: string,
}

export interface Achievement {
    achievementName: string,
    description: string,
    achievementDate: Date | null,
    sequence: number,
    link: string,
}

export interface LanguageSkill {
    languageName: string,
    sequence: number,
    powerIcon: string,
    powerLevel: number | null,
}

export interface EducationExperience {
    sequence: number,
    startDate: Date,
    endDate: Date,
    dateFormat: string | null, //choose display format: 1.null (not show) 2.dd/mm/yyyy 3.mm/yyyy 4.yyyy
    gpa: number,
    degree: string,
    detail: string,
    honor: string,
}