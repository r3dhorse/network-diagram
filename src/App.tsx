import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './App.css';

const initialNodes = [
  { id: '1', position: { x: 100, y: 100 }, data: { label: 'Router' } },
  { id: '2', position: { x: 300, y: 100 }, data: { label: 'Switch' } },
  { id: '3', position: { x: 300, y: 250 }, data: { label: 'Server' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

export default function App() {
  return (
    <div className="canvas-wrapper">
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
