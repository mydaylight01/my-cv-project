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
        try {
            if (!date) return "";

            return new Date(date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
            });
        } catch (error) {
            console.error("[WorkExperienceParagraph][renderDateWithFormat][Error] formatting date:", error);
            return "";
        }
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

    const renderWorkExperience = (workExperiences: WorkExperience[], position: "desktop" | "tablet" | "mobile" = "desktop") => {
        return workExperiences?.map((workExperience: WorkExperience, workExperienceIndex: number) => (
            <div key={`work_experience_${workExperienceIndex}`}>
                <Timeline
                    position={position === "desktop" ? "alternate" : "right"}
                    key={`work_experience_timeline_${workExperienceIndex}`}
                    sx={{
                        padding: 0,
                        ...(position === "mobile" && {
                            [`& .MuiTimelineItem-root:before`]: {
                                flex: 0.1,
                                padding: 0,
                            },
                        })
                    }}>
                    <TimelineItem>
                        {
                            position !== "mobile" && (
                                <TimelineOppositeContent
                                    sx={{ m: "10px + 0" }}
                                    variant="body1"
                                    color="lightgray"
                                    fontWeight="bold"
                                    fontFamily={"monospace"}
                                >
                                    <span className="text-yellow-100 text-shadow-lg/10">{renderStartEndDate(workExperience?.workStartDate, workExperience?.workEndDate, !workExperience?.workEndDate)}</span>
                                </TimelineOppositeContent>
                            )
                        }
                        <TimelineSeparator>
                            <TimelineDot variant="filled" color="warning">
                                <FaLocationPin size={20} color="white" />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '5px', px: 2 }}>
                            <p className="text-orange-400 text-xl md:text-2xl font-bold font-kanit text-shadow-lg/10">
                                {workExperience?.jobPositionName}
                                {position === "mobile" ?
                                    <span className="text-yellow-100 text-sm text-shadow-lg/10">&nbsp;&nbsp;({renderStartEndDate(workExperience?.workStartDate, workExperience?.workEndDate, !workExperience?.workEndDate)})</span>
                                    : null}
                            </p>
                            <p className="text-base md:text-lg font-kanit text-shadow-lg/10 mb-2">{workExperience?.jobDescription}</p>
                        </TimelineContent>
                    </TimelineItem>
                    {
                        workExperience?.projects?.map((project: Projects, projectIndex: number) => (
                            <TimelineItem key={`${workExperienceIndex}_${projectIndex}`}>
                                {
                                    position !== "mobile" && (
                                        <TimelineOppositeContent
                                            sx={{ m: "0 + 0" }}
                                            variant="body1"
                                            color="lightgray"
                                            fontWeight="bold"
                                            fontFamily={"monospace"}
                                        >
                                            <span className="text-yellow-100 text-shadow-lg/10">{renderStartEndDate(project?.projectStartDate, project?.projectEndDate, projectIndex === 0)}</span>
                                        </TimelineOppositeContent>
                                    )
                                }
                                <TimelineSeparator>
                                    <TimelineDot color="warning" variant="outlined" sx={{ mx: "10px" }} />
                                    <TimelineConnector />
                                    {
                                        projectIndex < workExperience?.projects?.length - 1 && (
                                            <TimelineConnector />
                                        )
                                    }
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <p key={`project_${projectIndex}`} className="text-orange-300 text-lg md:text-xl font-bold font-kanit mb-1 text-shadow-lg/10">
                                        {project?.projectName}
                                        {position === "mobile" ?
                                            <span className="text-yellow-100 text-sm text-shadow-lg/10">&nbsp;&nbsp;({renderStartEndDate(project?.projectStartDate, project?.projectEndDate, projectIndex === 0)})</span>
                                            : null}
                                    </p>
                                    {
                                        project?.projectDescription?.map((description: ProjectDescription, descriptionIndex: number) => (
                                            <p key={`project_description_${projectIndex}_${descriptionIndex}`} className="text-xs md:text-sm font-kanit leading-relaxed whitespace-pre-wrap text-shadow-lg/10">
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description?.description}
                                            </p>
                                        ))
                                    }
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="warning" variant="filled" sx={{ mx: "10px" }} />
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
                    <span className="text-2xl md:text-3xl text-shadow-lg/20">Work Experience</span>
                    <hr className="w-9/10 sm:w-4/5 md:w-2/3 border-1 border-white mt-4 mb-2 opacity-50" />
                </div>
                {/* Desktop */}
                <div className="w-full hidden md:flex flex-col">
                    {renderWorkExperience(data?.workExperiences, "desktop")}
                </div>
                {/* Tablet */}
                <div className="w-full hidden sm:flex md:hidden flex-col">
                    {renderWorkExperience(data?.workExperiences, "tablet")}
                </div>
                {/* Mobile */}
                <div className="w-full flex sm:hidden flex-col">
                    {renderWorkExperience(data?.workExperiences, "mobile")}
                </div>
            </div>
        </>
    );
};

export default WorkExperienceParagraph;