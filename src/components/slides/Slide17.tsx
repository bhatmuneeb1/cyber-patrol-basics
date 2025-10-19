import remoteAccessImage from "@/assets/remote-access.jpg";

const Slide17 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h2 className="text-5xl font-bold text-foreground mb-2">Remote Access Tools</h2>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">What are Remote Access Tools?</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Software that allows control of a computer or network from a distant location. Used by both IT professionals and cybercriminals.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-accent mb-3">Common Remote Access Tools</h3>
            <div className="space-y-2 text-base text-muted-foreground">
              <div>• <span className="font-semibold text-foreground">TeamViewer:</span> Remote support and access</div>
              <div>• <span className="font-semibold text-foreground">AnyDesk:</span> Fast remote desktop</div>
              <div>• <span className="font-semibold text-foreground">Remote Desktop Protocol (RDP):</span> Windows built-in</div>
              <div>• <span className="font-semibold text-foreground">VNC:</span> Virtual Network Computing</div>
              <div>• <span className="font-semibold text-foreground">SSH:</span> Secure Shell for servers</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-lg">
            <img src={remoteAccessImage} alt="Remote Access Tools" className="w-full h-56 object-cover" />
          </div>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-destructive mb-3">How Criminals Misuse</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Install RATs (Remote Access Trojans)</li>
              <li>• Steal sensitive data remotely</li>
              <li>• Control victim's computer</li>
              <li>• Deploy ransomware</li>
              <li>• Monitor user activities</li>
            </ul>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-accent mb-3">How Police Use</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Digital forensics investigation</li>
              <li>• Accessing seized devices</li>
              <li>• Remote system analysis</li>
              <li>• Coordinated operations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide17;
