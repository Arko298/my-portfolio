import React,{useEffect,useState} from "react";
interface SkillBarProps{
    skill: string;
    percentage: number
}
const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      // Animate the width of the skill bar
      const timeout = setTimeout(() => {
        setWidth(percentage);
      }, 300); // Delay before animation starts (optional)
  
      return () => clearTimeout(timeout);
    }, [percentage]);
  
    return (
      <div className="my-4">
        <div className="text-lg font-semibold text-white">{skill}</div>
        <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
          <div
            className="bg-blue-600 h-6 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          >
            <div className="text-white text-right pr-2 font-medium">
              {width}%
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SkillBar;