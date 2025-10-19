import { BookOpen } from "lucide-react";

const Slide15 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <BookOpen className="w-12 h-12 text-accent" />
        <h2 className="text-5xl font-bold text-foreground">Case Studies</h2>
      </div>
      
      <div className="space-y-5">
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📱</div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primary mb-2">Case 1: Social Media Fraud</h3>
              <p className="text-base text-muted-foreground mb-3">
                <span className="font-semibold text-foreground">Problem:</span> Criminal created fake profiles to sell non-existent products. Victims paid money but never received goods.
              </p>
              <p className="text-base text-muted-foreground mb-3">
                <span className="font-semibold text-foreground">Action:</span> Police monitored social media, tracked IP address, collected transaction records, and arrested the accused.
              </p>
              <p className="text-base text-accent font-semibold">Result: 15 victims got refunds, criminal prosecuted</p>
            </div>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">👶</div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-accent mb-2">Case 2: Child Safety</h3>
              <p className="text-base text-muted-foreground mb-3">
                <span className="font-semibold text-foreground">Problem:</span> Adult pretending to be teenager was targeting children on gaming platforms for inappropriate conversations.
              </p>
              <p className="text-base text-muted-foreground mb-3">
                <span className="font-semibold text-foreground">Action:</span> Cyber patrol noticed suspicious pattern, collected chat logs, coordinated with platform, identified and arrested predator.
              </p>
              <p className="text-base text-accent font-semibold">Result: 8 children protected, predator imprisoned</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💰</div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primary mb-2">Case 3: Investment Scam</h3>
              <p className="text-base text-muted-foreground mb-3">
                <span className="font-semibold text-foreground">Problem:</span> Fake investment website promising 200% returns in 30 days. Thousands of people invested lakhs of rupees.
              </p>
              <p className="text-base text-muted-foreground mb-3">
                <span className="font-semibold text-foreground">Action:</span> Cyber cell tracked website servers, identified bank accounts, froze funds, arrested operators.
              </p>
              <p className="text-base text-accent font-semibold">Result: ₹2 crore recovered, 5 criminals arrested</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide15;
