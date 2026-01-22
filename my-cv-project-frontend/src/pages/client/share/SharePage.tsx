import { useParams } from "react-router-dom";

const SharePage: React.FC = () => {
    const { contentId } = useParams<{ contentId: string }>();

    return (
        <div>
            <h1>Share</h1>
            <p>{contentId}</p>
        </div>
    );
};

export default SharePage;