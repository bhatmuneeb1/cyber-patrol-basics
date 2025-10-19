import osintImage from "@/assets/osint-tools.jpg";

const Slide19 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h2 className="text-5xl font-bold text-foreground mb-2">OSINT Tools (Open Source Intelligence)</h2>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">What is OSINT?</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Collecting and analyzing information from <span className="text-primary font-semibold">publicly available sources</span> like websites, social media, news, public records.
            </p>
            <p className="text-base text-muted-foreground">
              Used by police to gather intelligence without legal restrictions since data is already public.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-accent mb-3">Popular OSINT Tools</h3>
            <div className="space-y-2 text-base text-muted-foreground">
              <div>• <span className="font-semibold text-foreground">Maltego:</span> Visual link analysis</div>
              <div>• <span className="font-semibold text-foreground">Shodan:</span> Internet-connected devices</div>
              <div>• <span className="font-semibold text-foreground">theHarvester:</span> Email and domain data</div>
              <div>• <span className="font-semibold text-foreground">SpiderFoot:</span> Automated OSINT</div>
              <div>• <span className="font-semibold text-foreground">Google Dorks:</span> Advanced search</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-lg">
            <img src={osintImage} alt="OSINT Intelligence Gathering" className="w-full h-56 object-cover" />
          </div>

          <div className="bg-secondary/20 border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Information Sources</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div>📱 Social Media Profiles</div>
              <div>🌐 Public Websites</div>
              <div>📰 News Articles</div>
              <div>📊 Government Records</div>
              <div>💼 Business Registrations</div>
              <div>🗺️ Geolocation Data</div>
              <div>📸 Photo Metadata</div>
              <div>🔍 Search Engine Results</div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-accent mb-3">Police Applications</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Track suspects online presence</li>
              <li>• Verify identities and alibis</li>
              <li>• Map criminal networks</li>
              <li>• Gather case evidence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide19;
