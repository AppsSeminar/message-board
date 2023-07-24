import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function MarkdownRenderer({ source }) {
    return <ReactMarkdown>{source}</ReactMarkdown>;
}

export default MarkdownRenderer;