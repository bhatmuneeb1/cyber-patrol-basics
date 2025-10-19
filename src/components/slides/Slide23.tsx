import { Brain } from "lucide-react";

const Slide23 = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <Brain className="w-12 h-12 text-primary" />
        <h2 className="text-5xl font-bold text-foreground">AI-Based Sentiment Monitoring</h2>
      </div>
      
      <div className="space-y-6">
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <p className="text-2xl text-foreground leading-relaxed">
            Using <span className="text-primary font-semibold">Artificial Intelligence</span> to automatically analyze text and detect emotions, threats, hate speech, or dangerous intent in online posts.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-accent mb-4">What It Detects</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>😡 Anger and hatred</li>
              <li>⚠️ Violent threats</li>
              <li>😢 Depression/suicide risk</li>
              <li>🎯 Radicalization signs</li>
              <li>💬 Hate speech</li>
              <li>🚨 Emergency situations</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-accent mb-4">How It Works</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">1. Data Collection</p>
                <p>Scan social media posts</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">2. AI Analysis</p>
                <p>Machine learning algorithms analyze text</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">3. Sentiment Score</p>
                <p>Assign positive/negative/neutral</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">4. Alert System</p>
                <p>Flag dangerous content</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-accent mb-4">Police Applications</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• Monitor protest sentiments</li>
              <li>• Detect terror planning</li>
              <li>• Track hate speech</li>
              <li>• Prevent violence</li>
              <li>• Identify vulnerable persons</li>
              <li>• Track fake news spread</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-accent mb-3">Benefits</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>✓ Process millions of posts automatically</li>
              <li>✓ Real-time threat detection</li>
              <li>✓ Early warning system</li>
              <li>✓ Multi-language support</li>
            </ul>
          </div>

          <div className="bg-secondary/20 border border-border rounded-lg p-5">
            <h3 className="text-xl font-semibold text-primary mb-3">Popular Tools</h3>
            <div className="space-y-2 text-base text-muted-foreground">
              <div>• IBM Watson Tone Analyzer</div>
              <div>• Google Cloud Natural Language</div>
              <div>• Microsoft Azure Text Analytics</div>
              <div>• Custom AI models</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide23;
