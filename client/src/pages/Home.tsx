import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, TrendingUp, Flame, Coins } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * DESIGN PHILOSOPHY: Cyberpunk Hype Machine
 * - Dark background (#0a0a0a) with electric yellow/orange accents
 * - Bold Space Grotesk typography for headlines
 * - Neon glow effects and glitch animations
 * - Diagonal cuts and asymmetric layouts
 * - Constant micro-animations creating "live" feeling
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-yellow-400/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/banger-logo.png" alt="$BANGER" className="w-10 h-10 animate-pulse" />
            <span className="text-xl font-bold text-yellow-400" style={{ fontFamily: 'Space Grotesk' }}>$BANGER</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-white hover:text-yellow-400 transition-colors">About</a>
            <a href="#why" className="text-white hover:text-yellow-400 transition-colors">Why</a>
            <a href="#tokenomics" className="text-white hover:text-yellow-400 transition-colors">Tokenomics</a>
            <a href="#community" className="text-white hover:text-yellow-400 transition-colors">Community</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with diagonal cut */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="Hero Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
        </div>

        {/* Diagonal cut SVG */}
        <svg className="absolute bottom-0 left-0 w-full h-32 z-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <polygon points="0,40 1200,0 1200,120 0,120" fill="#0a0a0a" />
        </svg>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="mb-8 animate-bounce">
            <img src="/images/banger-logo.png" alt="$BANGER Bomb" className="w-32 h-32 mx-auto drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px #FFFF00)' }} />
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 text-yellow-400 text-neon" style={{ fontFamily: 'Space Grotesk', letterSpacing: '-0.02em' }}>
            2026 WILL BE A BANGER
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            The Meme Token Indexing the Bullish Spirit of 2026
          </p>

          {/* Elon Musk Tweet Card */}
          <div className="max-w-2xl mx-auto mb-12 p-6 border-2 border-yellow-400 bg-black/50 backdrop-blur-sm neon-border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="mb-4">
              <p className="text-sm text-yellow-400 font-bold">@elonmusk</p>
              <p className="text-white mt-2 text-lg">
                "Happy New Year! 2026 will be a banger."
              </p>
              <p className="text-white/50 text-sm mt-4">January 1, 2026</p>
            </div>
            <a
              href="https://x.com/elonmusk/status/2006645159703072889"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2 group"
            >
              View the Original Elon Musk Tweet
              <ExternalLink className="w-4 h-4 group-hover:animate-bounce" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#community" className="btn-neon">
              Join Community
            </a>
            <a href="#tokenomics" className="px-6 py-3 font-bold border-2 border-yellow-400 text-yellow-400 rounded-sm hover:bg-yellow-400/10 transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-yellow-400 text-center" style={{ fontFamily: 'Space Grotesk' }}>
            About $BANGER
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                <span className="text-yellow-400 font-bold">$BANGER</span> is more than just a meme token. It represents the collective bullish energy of 2026, born from Elon Musk's New Year declaration that "2026 will be a banger."
              </p>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                In crypto and meme culture, "banger" is the ultimate compliment. It means something is absolutely fire, trending, and unstoppable. Every major market pump is a banger. Every viral moment is a banger.
              </p>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                <span className="text-orange-400 font-bold">2026 gives this meme unprecedented narrative lifespan.</span> As we move through the year, every bullish development, every pump, every community milestone becomes proof that 2026 is indeed a banger.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border-2 border-yellow-400/30 p-8 rounded-lg neon-border">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-2">Globally Recognizable</h3>
                      <p className="text-white/70">"Banger" is universal internet slang understood across all communities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-orange-400 mb-2">Viral Loop</h3>
                      <p className="text-white/70">Every market pump becomes a "banger" moment, amplifying the narrative</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Flame className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-2">2026 Sentiment</h3>
                      <p className="text-white/70">A proxy for the entire year's bullish energy and optimism</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why $BANGER Works Section */}
      <section id="why" className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <img src="/images/pattern-accent.png" alt="Pattern" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center text-yellow-400" style={{ fontFamily: 'Space Grotesk' }}>
            Why $BANGER Works
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group p-6 border-2 border-yellow-400/30 bg-black/50 hover:border-yellow-400 hover:bg-yellow-400/5 transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Globally Recognizable</h3>
              <p className="text-white/70 text-sm">Internet slang that transcends borders and communities</p>
            </div>

            {/* Card 2 */}
            <div className="group p-6 border-2 border-orange-400/30 bg-black/50 hover:border-orange-400 hover:bg-orange-400/5 transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-orange-400/20">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">Viral Loop</h3>
              <p className="text-white/70 text-sm">Tied to every market pump, amplifying the narrative</p>
            </div>

            {/* Card 3 */}
            <div className="group p-6 border-2 border-yellow-400/30 bg-black/50 hover:border-yellow-400 hover:bg-yellow-400/5 transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">2026 Sentiment</h3>
              <p className="text-white/70 text-sm">Proxy for the year's bullish energy and optimism</p>
            </div>

            {/* Card 4 */}
            <div className="group p-6 border-2 border-orange-400/30 bg-black/50 hover:border-orange-400 hover:bg-orange-400/5 transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-orange-400/20">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">BSC Bull Cycle</h3>
              <p className="text-white/70 text-sm">Meme mascot for the Binance Smart Chain bull run</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meme Slogan Section */}
      <section className="relative py-24 px-4 bg-black overflow-hidden">
        {/* Diagonal cut SVG top */}
        <svg className="absolute top-0 left-0 w-full h-20 z-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <polygon points="0,0 1200,40 1200,0" fill="#0a0a0a" opacity="0.5" />
        </svg>

        <div className="container mx-auto relative z-10 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-yellow-400 text-neon" style={{ fontFamily: 'Space Grotesk' }}>
              Up Only = Banger
            </h2>
            <h2 className="text-5xl md:text-7xl font-black text-orange-400" style={{ fontFamily: 'Space Grotesk' }}>
              2026 Mode: Banger
            </h2>
            <h2 className="text-5xl md:text-7xl font-black text-yellow-400 text-neon" style={{ fontFamily: 'Space Grotesk' }}>
              Every Pump Is a Banger
            </h2>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="relative py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-center text-yellow-400" style={{ fontFamily: 'Space Grotesk' }}>
            Tokenomics
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left side */}
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-yellow-400 bg-yellow-400/5 rounded-r-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Fair Launch</h3>
                <p className="text-white/70">No pre-sale, no presale allocation. Everyone starts equal.</p>
              </div>
              <div className="p-6 border-l-4 border-orange-400 bg-orange-400/5 rounded-r-lg">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">No VC</h3>
                <p className="text-white/70">Community-driven from day one. No venture capital control.</p>
              </div>
            </div>

            {/* Right side */}
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-yellow-400 bg-yellow-400/5 rounded-r-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Community First</h3>
                <p className="text-white/70">Built by the community, for the community. Decisions made together.</p>
              </div>
              <div className="p-6 border-l-4 border-orange-400 bg-orange-400/5 rounded-r-lg">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">Transparent & Simple</h3>
                <p className="text-white/70">No complex mechanics. Pure, honest tokenomics.</p>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 border-2 border-yellow-400/30 rounded-lg hover:border-yellow-400 transition-colors">
              <Coins className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-white/50 text-sm mb-2">Blockchain</p>
              <p className="text-2xl font-bold text-yellow-400">BSC</p>
            </div>
            <div className="text-center p-6 border-2 border-orange-400/30 rounded-lg hover:border-orange-400 transition-colors">
              <Zap className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <p className="text-white/50 text-sm mb-2">Launch Type</p>
              <p className="text-2xl font-bold text-orange-400">Fair Launch</p>
            </div>
            <div className="text-center p-6 border-2 border-yellow-400/30 rounded-lg hover:border-yellow-400 transition-colors">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-white/50 text-sm mb-2">Vibe</p>
              <p className="text-2xl font-bold text-yellow-400">Pure Hype</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <img src="/images/pattern-accent.png" alt="Pattern" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-center text-yellow-400" style={{ fontFamily: 'Space Grotesk' }}>
            Join the Community
          </h2>

          <p className="text-xl text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Markets pump. Memes spread. Community bangs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Telegram */}
            <a
              href="https://t.me/Banger_community"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border-2 border-yellow-400/30 bg-black/50 hover:border-yellow-400 hover:bg-yellow-400/5 transition-all duration-300 rounded-lg text-center hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              <div className="text-5xl mb-4"></div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Telegram</h3>
              <p className="text-white/70 mb-4">Join our community chat</p>
              <div className="inline-flex items-center gap-2 text-yellow-400 font-bold group-hover:gap-3 transition-all">
                t.me/Banger_community
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/Bangeronbsc"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border-2 border-orange-400/30 bg-black/50 hover:border-orange-400 hover:bg-orange-400/5 transition-all duration-300 rounded-lg text-center hover:scale-105 hover:shadow-lg hover:shadow-orange-400/20"
            >
              <div className="text-5xl mb-4"></div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">X (Twitter)</h3>
              <p className="text-white/70 mb-4">Follow for updates</p>
              <div className="inline-flex items-center gap-2 text-orange-400 font-bold group-hover:gap-3 transition-all">
                @Bangeronbsc
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </div>

          {/* Community Tagline */}
          <div className="mt-16 text-center">
            <p className="text-lg text-white/60 italic">
              No official affiliation with Elon Musk or any other entity. $BANGER is a community-driven meme token celebrating the spirit of 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-black border-t border-yellow-400/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <img src="/images/banger-logo.png" alt="$BANGER" className="w-8 h-8" />
              <span className="text-yellow-400 font-bold">$BANGER 2026</span>
            </div>

            <p className="text-white/50 text-sm text-center">
              2026 Will Be a Banger • Community-Driven • Fair Launch • BSC
            </p>

            <div className="text-white/50 text-sm">
              © 2026 $BANGER Community
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs text-center leading-relaxed">
              DISCLAIMER: $BANGER is a meme token created by the community. It is not affiliated with Elon Musk, Tesla, SpaceX, or any other entity. This is for entertainment and community purposes only. Cryptocurrency is highly volatile and risky. Always do your own research before investing. We are not financial advisors.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
