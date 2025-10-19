import { CheckCircle2 } from "lucide-react";

const Slide13 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <CheckCircle2 className="w-12 h-12 text-accent" />
        <h2 className="text-5xl font-bold text-foreground">Best Practices</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">For Officers</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>✓ Stay updated on new cyber threats</li>
              <li>✓ Follow proper legal procedures</li>
              <li>✓ Use secure communication channels</li>
              <li>✓ Maintain confidentiality</li>
              <li>✓ Document all actions taken</li>
              <li>✓ Coordinate with cyber experts</li>
            </ul>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-accent mb-4">Training Needs</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Regular cyber awareness training</li>
              <li>• Digital forensics courses</li>
              <li>• Social media investigation skills</li>
              <li>• Legal updates and workshops</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Dos & Don'ts</h3>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-accent mb-2">DO:</p>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>• Preserve evidence immediately</li>
                  <li>• Work within legal boundaries</li>
                  <li>• Take complaints seriously</li>
                  <li>• Use official accounts only</li>
                </ul>
              </div>
              <div>
                <p className="text-lg font-semibold text-destructive mb-2">DON'T:</p>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>• Misuse surveillance tools</li>
                  <li>• Share sensitive information</li>
                  <li>• Skip documentation</li>
                  <li>• Violate privacy rights</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-secondary/20 border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-foreground mb-3">Team Coordination</h3>
            <p className="text-lg text-muted-foreground">Work closely with cyber cell, IT department, and legal team for effective results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide13;
