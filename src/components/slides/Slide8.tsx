import { CreditCard } from "lucide-react";

const Slide8 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <CreditCard className="w-12 h-12 text-destructive" />
        <h2 className="text-5xl font-bold text-foreground">Online Fraud Detection</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-destructive mb-4">Common Fraud Types</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛒</span>
                <div>
                  <p className="font-semibold text-foreground">Fake Shopping Sites</p>
                  <p className="text-sm text-muted-foreground">Websites that take money but never deliver goods</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💳</span>
                <div>
                  <p className="font-semibold text-foreground">Payment Frauds</p>
                  <p className="text-sm text-muted-foreground">Stolen credit cards, fake payment apps</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎰</span>
                <div>
                  <p className="font-semibold text-foreground">Investment Scams</p>
                  <p className="text-sm text-muted-foreground">Fake investment schemes promising quick returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Red Flags to Watch</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Too good to be true offers</li>
              <li>• Pressure to act quickly</li>
              <li>• Requests for personal info</li>
              <li>• Poor website quality</li>
              <li>• No contact information</li>
              <li>• Unusual payment methods</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-accent mb-4">Action Steps</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>1. Report to cybercrime portal</li>
              <li>2. Freeze affected accounts</li>
              <li>3. Collect digital evidence</li>
              <li>4. Track money flow</li>
              <li>5. Coordinate with banks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide8;
