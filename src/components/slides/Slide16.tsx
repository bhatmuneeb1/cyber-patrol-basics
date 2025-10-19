import futureTechImage from "@/assets/future-tech.jpg";

const Slide16 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h2 className="text-5xl font-bold text-foreground mb-2">Future of Cyber Patrolling</h2>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Emerging Technologies</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <p className="font-semibold text-foreground text-lg">Artificial Intelligence</p>
                  <p className="text-sm text-muted-foreground">Auto-detect threats, predict crimes, analyze patterns faster</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <p className="font-semibold text-foreground text-lg">Blockchain</p>
                  <p className="text-sm text-muted-foreground">Secure evidence storage, track cryptocurrency crimes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold text-foreground text-lg">Big Data Analytics</p>
                  <p className="text-sm text-muted-foreground">Process massive data, identify crime networks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-accent mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>✓ Cyber patrolling is essential for modern policing</li>
              <li>✓ Stay updated with technology and laws</li>
              <li>✓ Follow proper procedures always</li>
              <li>✓ Protect citizens, especially children</li>
              <li>✓ Continuous learning is crucial</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-lg">
            <img src={futureTechImage} alt="Future of Cyber Security" className="w-full h-64 object-cover" />
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Thank You</h3>
            <p className="text-xl text-muted-foreground mb-4">Together we can make the internet safer!</p>
            <div className="space-y-2 text-base text-muted-foreground">
              <p>For support: cybercrime.gov.in</p>
              <p>Emergency: 1930 (Cyber Crime Helpline)</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 text-center">
            <p className="text-lg text-primary font-semibold">Stay Alert, Stay Updated, Stay Safe!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide16;
