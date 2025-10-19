import { AlertCircle } from "lucide-react";

const Slide14 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <AlertCircle className="w-12 h-12 text-destructive" />
        <h2 className="text-5xl font-bold text-foreground">Challenges in Cyber Patrolling</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-destructive mb-3">Technical Challenges</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Rapidly changing technology</li>
              <li>• Encrypted communications</li>
              <li>• Anonymous networks (VPN, Tor)</li>
              <li>• Complex digital evidence</li>
              <li>• Limited technical expertise</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Regular training programs</li>
              <li>• Hire technical experts</li>
              <li>• Use advanced tools</li>
              <li>• Partner with tech companies</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-destructive mb-3">Legal Challenges</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Privacy vs security balance</li>
              <li>• Jurisdiction issues</li>
              <li>• International cooperation</li>
              <li>• Outdated laws</li>
              <li>• Evidence admissibility</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Follow legal procedures strictly</li>
              <li>• Coordinate with legal team</li>
              <li>• International cooperation</li>
              <li>• Advocate for law updates</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-destructive mb-3">Resource Challenges</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Limited budget</li>
              <li>• Shortage of trained staff</li>
              <li>• Expensive tools</li>
              <li>• Large volume of data</li>
              <li>• Time-consuming investigations</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Prioritize critical cases</li>
              <li>• Use automation tools</li>
              <li>• Share resources</li>
              <li>• Request government support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide14;
