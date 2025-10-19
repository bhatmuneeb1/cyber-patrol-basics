import { MapPin } from "lucide-react";

const Slide22 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <MapPin className="w-12 h-12 text-accent" />
        <h2 className="text-5xl font-bold text-foreground">IP Tracing & Geolocation Tools</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">IP Address Tracing</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Every device on internet has an <span className="text-primary font-semibold">IP address</span> (like a digital fingerprint). Can help identify location and internet service provider.
            </p>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Example:</span> IP 103.25.123.45 might trace to Mumbai, India using Jio network
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-accent mb-3">Tracing Tools</h3>
            <div className="space-y-2 text-base text-muted-foreground">
              <div>• <span className="font-semibold text-foreground">IP Lookup Websites:</span> Quick location check</div>
              <div>• <span className="font-semibold text-foreground">Traceroute:</span> Shows network path</div>
              <div>• <span className="font-semibold text-foreground">GeoIP Databases:</span> Location mapping</div>
              <div>• <span className="font-semibold text-foreground">WHOIS:</span> Domain ownership info</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-secondary/20 border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">How It Works</h3>
            <div className="space-y-3">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Step 1: Capture IP</h4>
                <p className="text-sm text-muted-foreground">Get IP address from logs, emails, or website visits</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Step 2: Lookup Database</h4>
                <p className="text-sm text-muted-foreground">Check against geolocation databases</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Step 3: Get Location</h4>
                <p className="text-sm text-muted-foreground">Find country, city, ISP information</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Step 4: Contact ISP</h4>
                <p className="text-sm text-muted-foreground">Legal request to ISP for exact user details</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-accent mb-3">Investigation Uses</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Track cybercriminals location</li>
              <li>• Identify fraud sources</li>
              <li>• Verify user claims</li>
              <li>• Coordinate arrests</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/30">
        <p className="text-base text-center text-foreground">
          <span className="text-destructive font-semibold">Note:</span> VPNs and proxy servers can hide real IP addresses, making tracking more difficult
        </p>
      </div>
    </div>
  );
};

export default Slide22;
