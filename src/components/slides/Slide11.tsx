import evidenceImage from "@/assets/digital-evidence.jpg";

const Slide11 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h2 className="text-5xl font-bold text-foreground mb-2">Digital Evidence Collection</h2>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="rounded-lg overflow-hidden border border-primary/20 shadow-lg">
          <img src={evidenceImage} alt="Digital Evidence Collection" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Types of Evidence</h3>
            <div className="space-y-3 text-base text-muted-foreground">
              <div>• <span className="font-semibold text-foreground">Screenshots:</span> Save images of messages, posts, profiles</div>
              <div>• <span className="font-semibold text-foreground">Chat Logs:</span> Conversation records from apps</div>
              <div>• <span className="font-semibold text-foreground">Email Records:</span> Email headers and content</div>
              <div>• <span className="font-semibold text-foreground">IP Addresses:</span> Network connection data</div>
              <div>• <span className="font-semibold text-foreground">Device Data:</span> Phone/computer contents</div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-accent mb-4">Collection Rules</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>1. Get proper authorization first</li>
              <li>2. Maintain chain of custody</li>
              <li>3. Use forensic tools properly</li>
              <li>4. Don't alter original data</li>
              <li>5. Document everything</li>
              <li>6. Store securely</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/30">
        <p className="text-base text-center text-foreground">
          <span className="text-destructive font-semibold">Critical:</span> Improper evidence collection can make it inadmissible in court
        </p>
      </div>
    </div>
  );
};

export default Slide11;
