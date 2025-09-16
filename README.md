# Onyx UI

The unified Onyx UI Component library.

## Installation

```bash
npm install onyx-ui
# or
yarn add onyx-ui
# or
pnpm add onyx-ui
```

## Usage

### Icons

Import individual icons from the `onyx-ui/icons` subpath:

```tsx
import {
  ActionsIcon,
  ActivityIcon,
  ArrowUpRightIcon,
  BarChartIcon,
  BubbleTextIcon,
  CheckCircleIcon,
  ClockIcon,
  CloudIcon,
  CodeIcon,
  CpuIcon,
  DevKitIcon,
  EditBigIcon,
  FileTextIcon,
  FolderIcon,
  FolderPlusIcon,
  GlobeIcon,
  HardDriveIcon,
  HeadsetMicIcon,
  HourglassIcon,
  ImageIcon,
  LightbulbSimpleIcon,
  LineChartUpIcon,
  LinkedDotsIcon,
  LockIcon,
  MenuIcon,
  MoreHorizontalIcon,
  PieChartIcon,
  QuoteEndIcon,
  QuoteStartIcon,
  SearchMenuIcon,
  ServerIcon,
  ShieldIcon,
  SidebarIcon,
  SlackIcon,
  SparkleIcon,
  UserIcon,
  UsersIcon,
  WorkflowIcon,
  XIcon,
  type IconProps,
} from "onyx-ui/icons";

function MyComponent() {
  return (
    <div>
      <ActionsIcon className="w-6 h-6" />
      <ActivityIcon className="w-6 h-6" />
    </div>
  );
}
```

### Text Component

Import the Text component from the `onyx-ui/text` subpath:

```tsx
import { Text, type TextProps } from "onyx-ui/text";

function MyComponent() {
  return (
    <div>
      <Text heading>Main Heading</Text>
      <Text subheading>Subheading</Text>
      <Text main>Regular text</Text>
    </div>
  );
}
```

### All Components

Import everything from the main package:

```tsx
import {
  ActionsIcon,
  ActivityIcon,
  Text,
  type IconProps,
  type TextProps,
} from "onyx-ui";

function MyComponent() {
  return (
    <div>
      <ActionsIcon className="w-6 h-6" />
      <Text heading>Hello World</Text>
    </div>
  );
}
```

## Available Icons

- ActionsIcon
- ActivityIcon
- ArrowUpRightIcon
- BarChartIcon
- BubbleTextIcon
- CheckCircleIcon
- ClockIcon
- CloudIcon
- CodeIcon
- CpuIcon
- DevKitIcon
- EditBigIcon
- FileTextIcon
- FolderIcon
- FolderPlusIcon
- GlobeIcon
- HardDriveIcon
- HeadsetMicIcon
- HourglassIcon
- ImageIcon
- LightbulbSimpleIcon
- LineChartUpIcon
- LinkedDotsIcon
- LockIcon
- MenuIcon
- MoreHorizontalIcon
- PieChartIcon
- QuoteEndIcon
- QuoteStartIcon
- SearchMenuIcon
- ServerIcon
- ShieldIcon
- SidebarIcon
- SlackIcon
- SparkleIcon
- UserIcon
- UsersIcon
- WorkflowIcon
- XIcon

## Text Component Props

The Text component supports the following props:

- **Size variants**: `hero`, `heading`, `subheading`, `callout`, `button`, `main`, `secondary`
- **Color variants**: `text01`, `text02`, `text03`, `text04`, `text05`, `inverted`
- **Other props**: `nowrap`, `className`

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run dev

# Lint
npm run lint

# Format code
npm run format:fix
```

## License

MIT
