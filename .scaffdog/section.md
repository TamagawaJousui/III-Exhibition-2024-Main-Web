---
name: 'section'
root: '.'
output: '.'
ignore: []
questions:
  name: 'Please enter a section name.'
---

# `./src/components/section/{{ inputs.name | camel }}/index.ts`

```typescript
export * from './{{ inputs.name | pascal }}Section';
```

# `./src/components/section/{{ inputs.name | camel }}/{{ inputs.name | pascal }}Section.tsx`

```typescript
import { FC } from 'react';

import { SectionContainer } from '@/components/shared/Container';

import { styles } from './{{ inputs.name | pascal }}Section.css';

export const {{ inputs.name | pascal }}Section: FC = () => (
    <SectionContainer title="{{ inputs.name | pascal }}">
        <div className={styles.root}>Concept</div>
    </SectionContainer>
);
```

# `./src/components/section/{{ inputs.name | camel }}/{{ inputs.name | pascal }}Section.css.ts`

```typescript
import { style } from "@vanilla-extract/css";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        height: "100%",
    }),
};

```
