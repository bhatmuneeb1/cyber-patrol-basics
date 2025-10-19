import { Network } from "lucide-react";

const Slide18 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <Network className="w-12 h-12 text-primary" />
        <h2 className="text-5xl font-bold text-foreground">How Remote Access Tools Work</h2>
      </div>
      
      <div className="space-y-6">
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">Technical Working</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">1. Connection Setup</h4>
                <p className="text-sm text-muted-foreground">Client software connects to remote computer via internet. Uses unique ID or IP address.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">2. Authentication</h4>
                <p className="text-sm text-muted-foreground">Password or security code verification. Some use two-factor authentication.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">3. Screen Sharing</h4>
                <p className="text-sm text-muted-foreground">Remote screen transmitted in real-time. Controller sees and operates the system.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">4. Control Transfer</h4>
                <p className="text-sm text-muted-foreground">Keyboard and mouse inputs sent to remote computer. Actions executed remotely.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">5. File Transfer</h4>
                <p className="text-sm text-muted-foreground">Files can be shared between local and remote systems securely.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">6. Encryption</h4>
                <p className="text-sm text-muted-foreground">Data encrypted during transmission. Prevents unauthorized interception.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-5 text-center">
            <div className="text-4xl mb-2">🔒</div>
            <h4 className="text-lg font-semibold text-accent mb-2">Security Features</h4>
            <p className="text-sm text-muted-foreground">End-to-end encryption, session logs, access permissions</p>
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-5 text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h4 className="text-lg font-semibold text-accent mb-2">Performance</h4>
            <p className="text-sm text-muted-foreground">Low latency, bandwidth optimization, quality adjustment</p>
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-5 text-center">
            <div className="text-4xl mb-2">📋</div>
            <h4 className="text-lg font-semibold text-accent mb-2">Logging</h4>
            <p className="text-sm text-muted-foreground">Connection history, session recording, audit trails</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide18;
