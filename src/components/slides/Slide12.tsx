import { Scale } from "lucide-react";

const Slide12 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <Scale className="w-12 h-12 text-accent" />
        <h2 className="text-5xl font-bold text-foreground">Legal Framework</h2>
      </div>
      
      <div className="space-y-6">
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
          <h3 className="text-3xl font-semibold text-accent mb-4">Information Technology Act, 2000</h3>
          <p className="text-lg text-muted-foreground mb-4">Main law for cybercrimes in India</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-5">
              <h4 className="text-xl font-semibold text-primary mb-3">Key Sections</h4>
              <div className="space-y-3 text-base text-muted-foreground">
                <div>• <span className="font-semibold text-foreground">Section 66:</span> Computer hacking</div>
                <div>• <span className="font-semibold text-foreground">Section 66A:</span> Offensive messages</div>
                <div>• <span className="font-semibold text-foreground">Section 66C:</span> Identity theft</div>
                <div>• <span className="font-semibold text-foreground">Section 66D:</span> Cheating by impersonation</div>
                <div>• <span className="font-semibold text-foreground">Section 67:</span> Publishing obscene content</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-5">
              <h4 className="text-xl font-semibold text-primary mb-3">Other Important Laws</h4>
              <div className="space-y-3 text-base text-muted-foreground">
                <div>• <span className="font-semibold text-foreground">IPC Section 419:</span> Cheating by impersonation</div>
                <div>• <span className="font-semibold text-foreground">IPC Section 420:</span> Cheating and fraud</div>
                <div>• <span className="font-semibold text-foreground">IPC Section 463-471:</span> Forgery</div>
                <div>• <span className="font-semibold text-foreground">POCSO Act:</span> Child protection online</div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
              <h4 className="text-xl font-semibold text-primary mb-3">Reporting Portal</h4>
              <p className="text-lg text-foreground font-semibold">cybercrime.gov.in</p>
              <p className="text-sm text-muted-foreground mt-2">National Cybercrime Reporting Portal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide12;
