import darkWebImage from "@/assets/dark-web.jpg";

const Slide20 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h2 className="text-5xl font-bold text-foreground mb-2">Dark Web Surveillance</h2>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-destructive mb-4">What is Dark Web?</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-3">
              Hidden part of internet not indexed by search engines. Requires <span className="text-destructive font-semibold">special software like Tor</span> to access.
            </p>
            <p className="text-base text-muted-foreground">
              Used for both legal privacy and illegal activities like drug trade, weapons sales, stolen data.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Why Monitor Dark Web?</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Track illegal marketplaces</li>
              <li>• Monitor terror communications</li>
              <li>• Find stolen data sales</li>
              <li>• Identify criminal networks</li>
              <li>• Prevent planned crimes</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-lg">
            <img src={darkWebImage} alt="Dark Web Surveillance" className="w-full h-56 object-cover" />
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Surveillance Tools</h3>
            <div className="space-y-2 text-base text-muted-foreground">
              <div>• <span className="font-semibold text-foreground">Tor Browser:</span> Access dark web sites</div>
              <div>• <span className="font-semibold text-foreground">OnionScan:</span> Analyze hidden services</div>
              <div>• <span className="font-semibold text-foreground">Darknet Monitoring:</span> Track marketplaces</div>
              <div>• <span className="font-semibold text-foreground">Cryptocurrency Trackers:</span> Follow money</div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-accent mb-3">Police Strategy</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Create undercover accounts</li>
              <li>• Monitor illegal marketplaces</li>
              <li>• Track cryptocurrency transactions</li>
              <li>• Coordinate international operations</li>
              <li>• Gather intelligence for raids</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide20;
