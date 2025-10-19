import { Laptop } from "lucide-react";

const Slide6 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <Laptop className="w-12 h-12 text-primary" />
        <h2 className="text-5xl font-bold text-foreground">Tools & Technologies</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-card border border-primary/30 rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-primary mb-3">Monitoring Software</h3>
          <p className="text-base text-muted-foreground">Track social media, websites, and online activities</p>
        </div>

        <div className="bg-card border border-primary/30 rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">🛡️</div>
          <h3 className="text-xl font-semibold text-primary mb-3">Security Tools</h3>
          <p className="text-base text-muted-foreground">Firewalls, antivirus, encryption software</p>
        </div>

        <div className="bg-card border border-primary/30 rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-primary mb-3">Analysis Tools</h3>
          <p className="text-base text-muted-foreground">Data analytics, pattern recognition, AI systems</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">🔐</div>
          <h3 className="text-xl font-semibold text-accent mb-3">Forensic Tools</h3>
          <p className="text-base text-muted-foreground">Digital evidence collection and preservation</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">🌐</div>
          <h3 className="text-xl font-semibold text-accent mb-3">Network Tools</h3>
          <p className="text-base text-muted-foreground">IP tracking, network monitoring systems</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">📱</div>
          <h3 className="text-xl font-semibold text-accent mb-3">Mobile Apps</h3>
          <p className="text-base text-muted-foreground">On-the-go monitoring and reporting tools</p>
        </div>
      </div>

      <div className="bg-secondary/20 rounded-lg p-5 border border-border">
        <p className="text-lg text-center text-muted-foreground">
          <span className="text-primary font-semibold">Important:</span> All tools must be used legally with proper authorization
        </p>
      </div>
    </div>
  );
};

export default Slide6;
