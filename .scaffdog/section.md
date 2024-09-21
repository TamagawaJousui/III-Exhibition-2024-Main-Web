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
    <SectionContainer id="{{ inputs.name }}" title="{{ inputs.name | pascal }}">
        <div className={styles.root}>{{ inputs.name | pascal }}</div>
    </SectionContainer>
);
```

# `./src/components/section/{{ inputs.name | camel }}/{{ inputs.name | pascal }}Section.css.ts`

```typescript
import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        padding: `${vars.spacing.md} 0`,
        height: "100%",
    }),
};

```
