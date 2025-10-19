import childSafetyImage from "@/assets/child-safety.jpg";

const Slide10 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h2 className="text-5xl font-bold text-foreground mb-2">Child Safety Online</h2>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-destructive mb-4">Online Dangers for Children</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Online predators and groomers</li>
              <li>• Inappropriate content exposure</li>
              <li>• Cyberbullying by peers</li>
              <li>• Privacy and data theft</li>
              <li>• Online gaming risks</li>
              <li>• Social media dangers</li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">How to Protect</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Parental control software</li>
              <li>• Monitor online activities</li>
              <li>• Educate about online safety</li>
              <li>• Set time limits</li>
              <li>• Keep devices in common areas</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-lg">
            <img src={childSafetyImage} alt="Child Online Safety" className="w-full h-64 object-cover" />
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-accent mb-4">Police Response</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Priority treatment for child cases</li>
              <li>• Fast investigation procedures</li>
              <li>• Coordination with child protection services</li>
              <li>• School awareness programs</li>
              <li>• Strict action against offenders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10;
