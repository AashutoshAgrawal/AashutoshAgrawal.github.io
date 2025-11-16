import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface Node {
  id: number;
  x: number;
  y: number;
  layer: number;
}

interface Connection {
  from: Node;
  to: Node;
  active: boolean;
}

const BackgroundShapes: React.FC = () => {
  const { theme } = useTheme();
  const [connections, setConnections] = useState<Connection[]>([]);
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    // Create neural network structure: Input -> Hidden1 -> Hidden2 -> Output
    const layers = [
      { count: 4, x: 15 },  // Input layer
      { count: 6, x: 35 },  // Hidden layer 1
      { count: 5, x: 65 },  // Hidden layer 2
      { count: 3, x: 85 },  // Output layer
    ];

    const newNodes: Node[] = [];
    let nodeId = 0;

    layers.forEach((layer, layerIndex) => {
      const spacing = 80 / (layer.count + 1);
      for (let i = 0; i < layer.count; i++) {
        newNodes.push({
          id: nodeId++,
          x: layer.x,
          y: 10 + spacing * (i + 1),
          layer: layerIndex,
        });
      }
    });

    setNodes(newNodes);

    // Create connections between adjacent layers
    const newConnections: Connection[] = [];
    layers.forEach((layer, layerIndex) => {
      if (layerIndex < layers.length - 1) {
        const currentLayerNodes = newNodes.filter(n => n.layer === layerIndex);
        const nextLayerNodes = newNodes.filter(n => n.layer === layerIndex + 1);
        
        currentLayerNodes.forEach(fromNode => {
          nextLayerNodes.forEach(toNode => {
            // Not all connections - make it more sparse and realistic
            if (Math.random() > 0.3) {
              newConnections.push({
                from: fromNode,
                to: toNode,
                active: Math.random() > 0.7,
              });
            }
          });
        });
      }
    });

    setConnections(newConnections);

    // Animate random activations
    const interval = setInterval(() => {
      setConnections(prev =>
        prev.map(conn => ({
          ...conn,
          active: Math.random() > 0.7,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: theme === 'dark' 
            ? 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient Mesh - Strategic Focus Areas */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] ${
            theme === 'dark' 
              ? 'bg-blue-500/10' 
              : 'bg-blue-400/15'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className={`absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[120px] ${
            theme === 'dark' 
              ? 'bg-purple-500/10' 
              : 'bg-purple-400/15'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className={`absolute bottom-0 left-1/3 w-[550px] h-[550px] rounded-full blur-[120px] ${
            theme === 'dark' 
              ? 'bg-cyan-500/10' 
              : 'bg-cyan-400/15'
          }`}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Neural Network Visualization */}
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ 
          zIndex: 1,
          opacity: theme === 'dark' ? 0.4 : 0.3
        }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === 'dark' ? '#0ea5e9' : '#3b82f6'} stopOpacity="0.2" />
            <stop offset="100%" stopColor={theme === 'dark' ? '#d946ef' : '#a855f7'} stopOpacity="0.4" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor={theme === 'dark' ? '#0ea5e9' : '#3b82f6'} stopOpacity="0.8" />
            <stop offset="100%" stopColor={theme === 'dark' ? '#d946ef' : '#a855f7'} stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Connection Lines with Data Flow */}
        {connections.map((conn, i) => (
          <g key={i}>
            <line
              x1={`${conn.from.x}%`}
              y1={`${conn.from.y}%`}
              x2={`${conn.to.x}%`}
              y2={`${conn.to.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth={conn.active ? "1.5" : "0.5"}
              strokeOpacity={conn.active ? 0.6 : 0.15}
            />
            
            {/* Data pulse animation on active connections */}
            {conn.active && (
              <motion.circle
                r="2.5"
                fill={theme === 'dark' ? '#0ea5e9' : '#3b82f6'}
                filter="url(#glow)"
                initial={{
                  cx: `${conn.from.x}%`,
                  cy: `${conn.from.y}%`,
                  opacity: 0
                }}
                animate={{
                  cx: `${conn.to.x}%`,
                  cy: `${conn.to.y}%`,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </g>
        ))}

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = connections.some(c => 
            (c.from.id === node.id || c.to.id === node.id) && c.active
          );
          
          return (
            <motion.g key={node.id}>
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={isActive ? "6" : "4"}
                fill="url(#nodeGradient)"
                filter="url(#glow)"
                animate={{
                  scale: isActive ? [1, 1.3, 1] : 1,
                  opacity: isActive ? [0.8, 1, 0.8] : 0.6,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
              />
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="2"
                fill={theme === 'dark' ? '#ffffff' : '#000000'}
                opacity={isActive ? 0.9 : 0.3}
              />
            </motion.g>
          );
        })}
      </svg>

      {/* AI Metrics Corner Accent (subtle) */}
      <div className={`absolute bottom-8 right-8 font-mono text-xs ${
        theme === 'dark' ? 'text-cyan-400/20' : 'text-cyan-600/20'
      }`}>
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          accuracy: 94.7%
        </motion.div>
      </div>
    </div>
  );
};

export default BackgroundShapes;

