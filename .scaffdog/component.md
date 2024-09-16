---
name: "component"
root: "./src"
output: "**/*"
ignore: []
questions:
    name: "Name of the component"
---

# Variables

-   Pascal: `{{ inputs.name | pascal }}`
-   camel: `{{ inputs.name | camel }}`

# `{{ Pascal }}/{{ Pascal }}.tsx`

```typescript
import type { FC } from "react";
import { styles } from "./{{ Pascal }}.css";

type Props = {};

export const {{ Pascal }}: FC<Props> = () => {
  return (
    <div className={styles.root}>
      {{ Pascal }}
    </div>
  );
};
```

# `{{ Pascal }}/{{ Pascal }}.css.ts`

```typescript
import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.md,
    }),
};

```

# `{{ Pascal }}/index.ts`

```typescript
export * from "./{{ Pascal }}";
```
