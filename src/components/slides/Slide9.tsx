import { MessageSquareWarning } from "lucide-react";

const Slide9 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <MessageSquareWarning className="w-12 h-12 text-destructive" />
        <h2 className="text-5xl font-bold text-foreground">Cyberbullying Prevention</h2>
      </div>
      
      <div className="space-y-6">
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
          <p className="text-2xl text-foreground leading-relaxed">
            Cyberbullying is <span className="text-destructive font-semibold">repeated harassment</span> using digital devices. It can cause serious mental health issues.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Forms of Bullying</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Threatening messages</li>
              <li>• Spreading rumors</li>
              <li>• Sharing private photos</li>
              <li>• Creating fake profiles</li>
              <li>• Public shaming</li>
              <li>• Exclusion from groups</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-accent mb-4">Warning Signs</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Sudden social withdrawal</li>
              <li>• Avoiding devices</li>
              <li>• Emotional distress</li>
              <li>• Change in behavior</li>
              <li>• Sleep problems</li>
              <li>• Academic decline</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Police Action</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Take complaints seriously</li>
              <li>• Collect evidence quickly</li>
              <li>• Identify perpetrators</li>
              <li>• Provide victim support</li>
              <li>• School coordination</li>
              <li>• Legal action if needed</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-5 border border-primary/30">
          <p className="text-lg text-center text-foreground">
            <span className="font-semibold">Remember:</span> Cyberbullying is a crime under IT Act. Take swift action to protect victims.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide9;
