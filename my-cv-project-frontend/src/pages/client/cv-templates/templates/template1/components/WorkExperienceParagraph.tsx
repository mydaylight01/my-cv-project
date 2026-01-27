import type { TemplatePageProps } from "../../template.interface";

import { FaLocationPin } from "react-icons/fa6";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import type {
    ProjectDescription,
    Projects,
    WorkExperience
} from "../../../../../../services/model/mockup.model";

const WorkExperienceParagraph: React.FC<TemplatePageProps> = ({ data }) => {

    const renderDateWithFormat = (date: Date | null) => {
        if (!date) return "";
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            year: "numeric",
        }).format(date);
    }

    const renderStartEndDate = (startDate: Date | null, endDate: Date | null, isPresent: boolean = false): string => {
        if (!startDate && !endDate) return "";

        const startDateString = renderDateWithFormat(startDate);
        const endDateString = renderDateWithFormat(endDate);

        if (startDateString === "Invalid Date" || endDateString === "Invalid Date") {
            return "";
        }

        if (startDateString === endDateString) {
            return startDateString;
        }

        if (startDateString && !endDateString) {
            return startDateString + " - " + (isPresent ? "Present" : "");
        }

        if (!startDateString && endDateString) {
            return " - " + (isPresent ? "Present" : endDateString);
        }

        return startDateString + " - " + endDateString;
    }

    const renderWorkExperience = (workExperiences: WorkExperience[]) => {
        return workExperiences?.map((workExperience: WorkExperience, workExperienceIndex: number) => (
            <div key={`${workExperienceIndex}`}>
                <Timeline position="alternate" key={`${workExperienceIndex}_timeline`}>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: "10px + 0" }}
                            variant="body1"
                            color="lightgray"
                            fontWeight="bold"
                            fontFamily={"monospace"}
                        >
                            {renderStartEndDate(workExperience?.workStartDate, workExperience?.workEndDate, !workExperience?.workEndDate)}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <FaLocationPin size={20} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '5px', px: 2 }}>
                            <p className="text-xl md:text-2xl font-bold font-kanit">{workExperience?.jobPositionName}</p>
                            <p className="text-base md:text-lg font-kanit">{workExperience?.jobDescription}</p>
                        </TimelineContent>
                    </TimelineItem>
                    {
                        workExperience?.projects?.map((project: Projects, projectIndex: number) => (
                            <TimelineItem key={`${workExperienceIndex}_${projectIndex}`}>
                                <TimelineOppositeContent
                                    sx={{ m: "0 + 0" }}
                                    variant="body1"
                                    color="lightgray"
                                    fontWeight="bold"
                                    fontFamily={"monospace"}
                                >
                                    {renderStartEndDate(project?.projectStartDate, project?.projectEndDate, projectIndex === 0)}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                    {
                                        projectIndex < workExperience?.projects?.length - 1 && (
                                            <TimelineConnector />
                                        )
                                    }
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <p key={`project_${projectIndex}`} className="text-lg md:text-xl font-bold font-kanit mb-1">
                                        {project?.projectName}
                                    </p>
                                    {
                                        project?.projectDescription?.map((description: ProjectDescription, descriptionIndex: number) => (
                                            <p key={`project_description_${projectIndex}_${descriptionIndex}`} className="text-xs md:text-sm font-kanit leading-relaxed whitespace-pre-wrap">
                                                &nbsp;&nbsp;&nbsp;&nbsp;{description?.description}
                                            </p>
                                        ))
                                    }
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        ));
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center pt-8 bg-gray-600">
                <div className="w-full flex flex-col font-bold items-center justify-center pt-0 md:pt-4">
                    <span className="text-xl md:text-2xl">Work Experience</span>
                    <hr className="w-9/10 sm:w-4/5 md:w-2/3 border-0.5 md:border-1 border-white mt-4 mb-2" />
                </div>
                {renderWorkExperience(data?.workExperiences)}
            </div>
        </>
    );
};

export default WorkExperienceParagraph;