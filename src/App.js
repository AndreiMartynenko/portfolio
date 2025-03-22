import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border rounded-2xl shadow-lg bg-white dark:bg-gray-900 p-4 hover:shadow-xl transition-shadow duration-300"
  >
    {children}
  </motion.div>
);

const CardContent = ({ children, className }) => <div className={className}>{children}</div>;
const Button = ({ children, className }) => (
  <button className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition ${className}`}>{children}</button>
);

export default function Home() {
  return (
    <main className="p-6 max-w-6xl mx-auto font-sans text-gray-800 dark:text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold mb-3">Andrei Martynenko</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Blockchain & Golang Engineer</p>
        <p className="text-md text-gray-500 mt-2 dark:text-gray-400">Building DeFi trading bots, custom blockchains, and AI-powered Web3 tools</p>
        <div className="flex justify-center gap-6 mt-5 text-2xl">
          <a href="https://github.com/AndreiMartynenko" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/andrei-m-737512154/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <Linkedin />
          </a>
          <a href="mailto:andreimartynenko@outlook.com" className="hover:text-indigo-500">
            <Mail />
          </a>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">🚀 Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent>
              <h3 className="text-2xl font-semibold">Tendo-Chain – Custom Blockchain</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                A purpose-built blockchain developed to support fast, secure, and scalable Web3 applications with AI integration and developer-friendly smart contract tooling.
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 mt-3 list-disc list-inside">
                <li>Built using Golang and Solidity</li>
                <li>Modular consensus and EVM-compatible</li>
                <li>Includes custom gas-fee optimizer (AI-based)</li>
              </ul>
              <div className="mt-5 flex gap-4">
                <Button>
                  <a href="https://github.com/AndreiMartynenko/tendo-chain" target="_blank" rel="noreferrer">GitHub</a>
                </Button>
                <Button>
                  <a href="https://sepolia.etherscan.io/address/0xb4A460b480c9CF3C0825798e8d5Fb55D84c244F1" target="_blank" rel="noreferrer">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-2xl font-semibold">DExTraderX – Arbitrage Bot</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                A decentralized arbitrage bot comparing token prices across Uniswap and Sushiswap to perform profitable atomic swaps.
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 mt-3 list-disc list-inside">
                <li>Solidity + Golang</li>
                <li>Flash loan integration (planned)</li>
                <li>Deployed to Goerli testnet</li>
              </ul>
              <div className="mt-5 flex gap-4">
                <Button>
                  <a href="https://github.com/AndreiMartynenko/dex-trader-x" target="_blank" rel="noreferrer">GitHub</a>
                </Button>
                <Button>
                  <a href="https://dextrading.com" target="_blank" rel="noreferrer">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">👋 About Me</h2>
        <p className="text-md text-gray-700 dark:text-gray-300">
          I’m Andrei, a blockchain engineer and Golang developer with a background in finance and strong interest in DeFi automation. I build trading bots, smart contracts, and AI-powered financial tools. Currently pursuing my MS in Software Engineering with Management, I’m passionate about creating real-world Web3 applications.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">📬 Contact Me</h2>
        <p className="text-md text-gray-600 dark:text-gray-300">Let’s build something amazing together.</p>
        <div className="mt-6">
          <Button>
            <a href="mailto:andreimartynenko@outlook.com">Send Email</a>
          </Button>
        </div>
      </motion.section>
    </main>
  );
}
