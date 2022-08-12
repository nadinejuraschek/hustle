export interface TabsProps {
  handleClick: (tab: Tab) => void;
  tabs: Tab[];
}

export type Tab = {
  label: 'Bar' | 'Donut';
  value: 'bar' | 'ring';
};
