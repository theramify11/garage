'use client';

import dynamic from 'next/dynamic';
import { Component, ReactNode } from 'react';

/* ── Error boundary — prevents 3D crash from killing the whole page ── */
interface EBState { hasError: boolean }
class SceneErrorBoundary extends Component<{ children: ReactNode }, EBState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <div className="w-20 h-20 border border-l-border rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M4 26L16 6l12 20H4z" stroke="#e8650a" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M16 14v5M16 22v1" stroke="#e8650a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="font-body text-xs text-l-muted text-center px-4">
            3D preview unavailable in this browser
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ── Lazy-load the canvas — no SSR ── */
const CarScene = dynamic(() => import('./CarScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 border-2 border-l-amber border-t-transparent rounded-full animate-spin" />
      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-l-muted">
        Loading 3D View
      </p>
    </div>
  ),
});

export default function CarSceneClient() {
  return (
    <SceneErrorBoundary>
      <CarScene />
    </SceneErrorBoundary>
  );
}
