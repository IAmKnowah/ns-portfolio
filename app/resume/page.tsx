import PageContainer from "@/components/PageContainer";
import { repo } from "@/lib/repo";

export default function ResumePage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Resume</h1>

      <div className="w-full px-6 py-6">
        <iframe
          src={`${repo}/resume/NoahSejnoha_Resume.pdf`}
          className="w-full h-[90vh]"
          title="Resume"
        />
      </div>
    </>
  );
}