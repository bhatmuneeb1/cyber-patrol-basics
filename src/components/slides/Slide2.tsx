import { Shield } from "lucide-react";

const Slide2 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <Shield className="w-12 h-12 text-primary" />
        <h2 className="text-5xl font-bold text-foreground">What is Cyber Patrolling?</h2>
      </div>
      
      <div className="space-y-6 text-left">
        <div className="bg-secondary/30 rounded-lg p-6 border border-border">
          <p className="text-2xl text-foreground leading-relaxed">
            Cyber patrolling is the process of <span className="text-primary font-semibold">monitoring online spaces</span> to detect, prevent, and investigate cybercrimes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-3">Key Activities</h3>
            <ul className="space-y-3 text-xl text-muted-foreground">
              <li>• Monitoring social media</li>
              <li>• Tracking online crimes</li>
              <li>• Collecting digital evidence</li>
              <li>• Preventing cyber threats</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-accent mb-3">Purpose</h3>
            <ul className="space-y-3 text-xl text-muted-foreground">
              <li>• Protect citizens online</li>
              <li>• Stop cybercriminals</li>
              <li>• Gather intelligence</li>
              <li>• Build safer internet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
