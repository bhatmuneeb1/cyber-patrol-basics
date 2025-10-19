import heroImage from "@/assets/cyber-hero.jpg";

const Slide1 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Cyber Patrolling
        </h1>
        <p className="text-3xl text-muted-foreground font-medium">
          A Complete Guide for Law Enforcement
        </p>
      </div>
      <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-primary/20 shadow-lg">
        <img src={heroImage} alt="Cyber Security Network" className="w-full h-auto" />
      </div>
      <p className="text-xl text-muted-foreground">
        SSP Police Training Module
      </p>
    </div>
  );
};

export default Slide1;
