import networkAnalysisImage from "@/assets/network-analysis.jpg";

const Slide21 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h2 className="text-5xl font-bold text-foreground mb-2">Network Traffic Analysis Tools</h2>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">What is Network Traffic Analysis?</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Monitoring and examining data packets</span> traveling through a network to detect suspicious activities, intrusions, or policy violations.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-accent mb-3">Key Tools Used</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-foreground">Wireshark</p>
                <p className="text-sm text-muted-foreground">Packet capture and analysis tool. Shows detailed network traffic.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Snort</p>
                <p className="text-sm text-muted-foreground">Intrusion detection system. Alerts on suspicious patterns.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">NetFlow Analyzer</p>
                <p className="text-sm text-muted-foreground">Monitors bandwidth usage and traffic patterns.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Zeek (Bro)</p>
                <p className="text-sm text-muted-foreground">Network security monitoring framework.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-lg">
            <img src={networkAnalysisImage} alt="Network Traffic Analysis" className="w-full h-56 object-cover" />
          </div>

          <div className="bg-secondary/20 border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">What Can Be Detected</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <div>🚨 Hacking attempts</div>
              <div>🦠 Malware communications</div>
              <div>📤 Data exfiltration</div>
              <div>🔓 Unauthorized access</div>
              <div>🌐 DDoS attacks</div>
              <div>🔍 Port scanning</div>
              <div>📡 Unusual traffic patterns</div>
              <div>⚠️ Protocol violations</div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-accent mb-3">How Police Use It</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Monitor cybercrime activities</li>
              <li>• Trace hacker movements</li>
              <li>• Collect digital evidence</li>
              <li>• Identify attack sources</li>
              <li>• Protect critical infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide21;
