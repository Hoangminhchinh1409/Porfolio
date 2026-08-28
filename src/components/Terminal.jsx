import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Hoang Minh Chinh Interactive Terminal.' },
    { type: 'system', content: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef(null);

  const commands = {
    help: 'Available commands: whoami, skills, clear',
    whoami: 'Hoang Minh Chinh - Fresher Software Engineer & AI Enthusiast.',
    skills: 'ReactJS, NodeJS, Python, Java, MongoDB, Tailwind CSS...',
    clear: 'CLEAR_ACTION'
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';

      if (cmd === '') {
        setHistory([...history, { type: 'user', content: cmd }]);
      } else if (commands[cmd] === 'CLEAR_ACTION') {
        setHistory([]);
      } else if (commands[cmd]) {
        response = commands[cmd];
        setHistory([...history, { type: 'user', content: input }, { type: 'system', content: response }]);
      } else {
        response = `Command not found: ${cmd}. Type "help" for a list of commands.`;
        setHistory([...history, { type: 'user', content: input }, { type: 'error', content: response }]);
      }
      setInput('');
    }
  };

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700"
        >
          {/* Mac-like Header */}
          <div className="flex items-center px-4 py-3 bg-slate-800 border-b border-slate-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto flex items-center text-slate-400 text-sm font-mono">
              <TerminalIcon className="w-4 h-4 mr-2" />
              guest@chinh-portfolio: ~
            </div>
          </div>
          
          {/* Terminal Body */}
          <div ref={containerRef} className="p-6 h-80 overflow-y-auto font-mono text-sm" style={{ scrollbarWidth: 'thin' }}>
            {history.map((line, i) => (
              <div key={i} className="mb-2">
                {line.type === 'user' && (
                  <div><span className="text-neon mr-2">guest@chinh-portfolio:~$</span><span className="text-white">{line.content}</span></div>
                )}
                {line.type === 'system' && (
                  <div className="text-slate-300">{line.content}</div>
                )}
                {line.type === 'error' && (
                  <div className="text-red-400">{line.content}</div>
                )}
              </div>
            ))}
            
            <div className="flex items-center">
              <span className="text-neon mr-2">guest@chinh-portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-slate-600"
                autoComplete="off"
                spellCheck="false"
                autoFocus={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
