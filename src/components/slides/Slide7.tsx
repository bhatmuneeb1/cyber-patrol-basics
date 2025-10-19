import socialImage from "@/assets/social-monitoring.jpg";

const Slide7 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h2 className="text-5xl font-bold text-foreground mb-2">Social Media Monitoring</h2>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="rounded-lg overflow-hidden border border-primary/20 shadow-lg">
          <img src={socialImage} alt="Social Media Monitoring Dashboard" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
            <h3 className="text-2xl font-semibold text-primary mb-3">What to Monitor</h3>
            <ul className="space-y-2 text-lg text-muted-foreground">
              <li>• Suspicious posts and messages</li>
              <li>• Hate speech and threats</li>
              <li>• Fake news and misinformation</li>
              <li>• Criminal planning activities</li>
              <li>• Scam and fraud schemes</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-2xl font-semibold text-accent mb-3">Best Practices</h3>
            <ul className="space-y-2 text-lg text-muted-foreground">
              <li>• Use official police accounts</li>
              <li>• Follow legal guidelines</li>
              <li>• Document everything properly</li>
              <li>• Respect privacy laws</li>
              <li>• Take screenshots as evidence</li>
            </ul>
          </div>

          <div className="bg-secondary/20 rounded-lg p-4 border border-border">
            <p className="text-base text-muted-foreground">
              <span className="text-primary font-semibold">Platform Coverage:</span> Facebook, Twitter/X, Instagram, WhatsApp, Telegram, YouTube
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
