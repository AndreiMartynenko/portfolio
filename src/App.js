import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Andrei Martynenko</h1>
        <p className="text-lg text-gray-600">Blockchain & Golang Engineer</p>
        <p className="text-sm text-gray-400 mt-1">Building DeFi trading bots, blockchains, and AI-powered Web3 tools</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="mailto:andreimartynenko@outlook.com">
            <Mail />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">🚀 Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Tendo-Chain – Custom Blockchain</h3>
              <p className="text-sm text-gray-600 mt-2">
                A purpose-built blockchain developed to support fast, secure, and scalable Web3 applications with AI integration and developer-friendly smart contract tooling.
              </p>
              <ul className="text-xs text-gray-500 mt-2 list-disc list-inside">
                <li>Built using Golang and Solidity</li>
                <li>Modular consensus and EVM-compatible</li>
                <li>Includes custom gas-fee optimizer (AI-based)</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <Button variant="outline" asChild>
                  <a href="https://github.com/AndreiMartynenko/tendo-chain" target="_blank">GitHub</a>
                </Button>
                <Button asChild>
                  <a href="https://sepolia.etherscan.io/address/0xb4A460b480c9CF3C0825798e8d5Fb55D84c244F1" target="_blank">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">DExTraderX – Arbitrage Bot</h3>
              <p className="text-sm text-gray-600 mt-2">
                A decentralized arbitrage bot comparing token prices across Uniswap and Sushiswap to perform profitable atomic swaps.
              </p>
              <ul className="text-xs text-gray-500 mt-2 list-disc list-inside">
                <li>Solidity + Golang</li>
                <li>Flash loan integration (planned)</li>
                <li>Deployed to Goerli testnet</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <Button variant="outline" asChild>
                  <a href="https://github.com/AndreiMartynenko/dextraderx" target="_blank">GitHub</a>
                </Button>
                <Button asChild>
                  <a href="https://dextrading.com" target="_blank">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">👋 About Me</h2>
        <p className="text-gray-700 text-sm">
          I’m Andrei, a blockchain engineer and Golang developer with a background in finance and strong interest in DeFi automation. I build trading bots, smart contracts, and AI-powered financial tools. Currently pursuing my MS in Software Engineering with Management, I’m passionate about creating real-world Web3 applications.
        </p>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">📬 Contact Me</h2>
        <p className="text-sm text-gray-600">Let’s build something amazing together.</p>
        <Button className="mt-4" asChild>
          <a href="mailto:andreimartynenko@outlook.com">Send Email</a>
        </Button>
      </section>
    </main>
  );
}
