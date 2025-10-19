import { AlertTriangle } from "lucide-react";

const Slide3 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <AlertTriangle className="w-12 h-12 text-destructive" />
        <h2 className="text-5xl font-bold text-foreground">Understanding Cybercrime</h2>
      </div>
      
      <div className="space-y-6">
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
          <p className="text-2xl text-foreground leading-relaxed">
            Cybercrime is any <span className="text-destructive font-semibold">illegal activity</span> that involves a computer, network, or the internet.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-5 text-center">
            <div className="text-4xl mb-2">💻</div>
            <h4 className="text-lg font-semibold text-primary mb-2">Computer as Tool</h4>
            <p className="text-sm text-muted-foreground">Using computers to commit crimes</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <h4 className="text-lg font-semibold text-primary mb-2">Computer as Target</h4>
            <p className="text-sm text-muted-foreground">Attacking computer systems</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 text-center">
            <div className="text-4xl mb-2">🌐</div>
            <h4 className="text-lg font-semibold text-primary mb-2">Internet Crimes</h4>
            <p className="text-sm text-muted-foreground">Crimes committed online</p>
          </div>
        </div>

        <div className="bg-secondary/20 rounded-lg p-6 border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Why Cybercrime is Growing</h3>
          <div className="grid grid-cols-2 gap-4 text-lg text-muted-foreground">
            <div>• More people online every day</div>
            <div>• Easy to hide identity</div>
            <div>• Can target anyone worldwide</div>
            <div>• Low cost to start crimes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
