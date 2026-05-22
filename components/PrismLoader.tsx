'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return null;
}