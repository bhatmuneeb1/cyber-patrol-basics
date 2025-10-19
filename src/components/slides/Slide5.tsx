import { Target } from "lucide-react";

const Slide5 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <Target className="w-12 h-12 text-accent" />
        <h2 className="text-5xl font-bold text-foreground">Why Cyber Patrolling Matters</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Protect Citizens</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Stop frauds before they happen</li>
              <li>• Protect children from harm</li>
              <li>• Save people from scams</li>
              <li>• Prevent financial losses</li>
            </ul>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-accent mb-4">Gather Intelligence</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Track criminal networks</li>
              <li>• Identify crime patterns</li>
              <li>• Monitor threats early</li>
              <li>• Share with other agencies</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-secondary/30 border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Quick Response</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Detect crimes in real-time</li>
              <li>• Act before damage spreads</li>
              <li>• Catch criminals faster</li>
              <li>• Reduce investigation time</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-accent mb-4">Build Trust</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Show police presence online</li>
              <li>• Make internet safer</li>
              <li>• Encourage reporting</li>
              <li>• Build digital confidence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
