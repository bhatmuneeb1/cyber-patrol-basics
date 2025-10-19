import cybercrimeImage from "@/assets/cybercrime-types.jpg";

const Slide4 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h2 className="text-5xl font-bold text-foreground mb-2">Types of Cybercrimes</h2>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-xl font-semibold text-primary mb-3">🎣 Phishing</h3>
            <p className="text-base text-muted-foreground">Fake emails or websites to steal passwords and personal information</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-xl font-semibold text-primary mb-3">🦠 Malware</h3>
            <p className="text-base text-muted-foreground">Harmful software like viruses, ransomware that damage computers</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-xl font-semibold text-primary mb-3">🎭 Identity Theft</h3>
            <p className="text-base text-muted-foreground">Stealing someone's personal details to commit fraud</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-xl font-semibold text-primary mb-3">💰 Online Fraud</h3>
            <p className="text-base text-muted-foreground">Fake shopping sites, investment scams, lottery frauds</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-primary/20">
            <img src={cybercrimeImage} alt="Types of Cybercrime" className="w-full h-48 object-cover" />
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-xl font-semibold text-primary mb-3">😢 Cyberbullying</h3>
            <p className="text-base text-muted-foreground">Harassing or threatening people online</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-xl font-semibold text-primary mb-3">⚔️ Hacking</h3>
            <p className="text-base text-muted-foreground">Unauthorized access to systems and data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
