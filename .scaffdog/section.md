---
name: 'section'
root: '.'
output: '.'
ignore: []
questions:
  page: 'Please enter a page name. (expect "home")'
  name: 'Please enter a section name.'
---

# `./src/components/page/{{ inputs.page | camel }}/section/{{ inputs.name | camel }}/index.ts`

```typescript
export * from './{{ inputs.name | pascal }}Section';
```

# `./src/components/page/{{ inputs.page | camel }}/section/{{ inputs.name | camel }}/{{ inputs.name | pascal }}Section.tsx`

```typescript
import { FC } from 'react';

import { SectionContainer } from '@/components/shared/Container';

import { wrapper } from './{{ inputs.name | pascal }}Section.css';

export const {{ inputs.name | pascal }}Section: FC = () => {
  return (
    <SectionContainer
      title="{{ inputs.name | pascal }}"
    >
      <div className={wrapper}>{{ inputs.name | pascal }}</div>
    </SectionContainer>
  );
};
```

# `./src/components/page/{{ inputs.page | camel }}/section/{{ inputs.name | camel }}/{{ inputs.name | pascal }}Section.css.ts`

```typescript
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});
```
